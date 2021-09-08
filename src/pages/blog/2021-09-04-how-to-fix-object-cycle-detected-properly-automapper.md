---
title: How to Fix "A possible object cycle was detected" properly in your .Net project using AutoMapper
date: '2021-09-04T24:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ["csharp", "csproj"]
---

This issue has already been pretty well discussed [here](https://khalidabuhakmeh.com/ef-core-and-aspnet-core-cycle-issue-and-solution). However, I think this solution could be made easier to maintain at the cost of adding an additional dependency to your project.

Given a project containing the following entities:

```csharp
// Product.cs
    public class Product
    {
        public string Id { get; set; }

        public string Name { get; set; }

       	public virtual Store Store { get; set; }

        public string StoreId { get; set; }

    }

// Store.cs
  	public class Store
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }
```

```csharp
// StoreController.cs
    [HttpGet("{storeId}")]
    public async Task<IActionResult> GetStore([FromRoute] string storeId)
    {
        var result = await _dbContext.Set<Store>().Include(x => x.Prints).FirstAsync(x => x.Id == storeId);

        return new OkObjectResult(result);
    }
```

This would result in an exception being thrown while trying to serialize the object, "System.Text.Json.JsonException: A possible object cycle was detected" if the store has any product
 as there's an endless relationship cycle between a Store and a Product.

 We can solve this by mapping our Product and Store entities to Resource objects, using resource objects, we can dictate
 what the users of our API will see when they query it instead of having to adapt our Database Entity to work with our API.

 Our resources could look like this.
```csharp
// ProductResource.cs
    public class ProductResource
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string StoreId { get; set; }
    }

// StoreResource.cs
  	public class StoreResource
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public IEnumerable<string> ProductIds { get; set; }
    }
```

And our controller would look like this

```csharp
// StoreController.cs
    [HttpGet("{storeId}")]
    public async Task<IActionResult> GetStore([FromRoute] string storeId)
    {
        var result = await _dbContext.Set<Store>.FindAsync(storeId);
        var storeResource = new StoreResource{
            Id = result.Id,
            Name = result.Name,
            Path = result.Path,
            Prints =  result.Prints.Select(x => new PrintResource
            {
                Id = x.Id,
                Name = x.Name,
                StoreId = x.StoreId
            })
        };
        return new OkObjectResult(storeResource);
    }
```

The problem is solved and we no longer have the error we started with, however this isn't very portable, we'd have to copy and paste this
code in all our controllers that return a store which would be pretty messy, verbose and error prone. Furthermore, when we'd start adding 
additional properties to our store, we'd have to think about every controller where this logic is in place and go change it manually.

A simple solution is to maintain an extension class for our store which we can reuse anywhere in our codebase.

```csharp
// StoreExtension.cs
    public static class StoreExtension
    {
        public static StoreResource ToResource(this Store store)
        {
            return new StoreResource{
                Id = store.Id,
                Name = store.Name,
                Path = store.Path,
                Prints =  store.Prints?.Select(x => new PrintResource
                {
                    Id = x.Id,
                    Name = x.Name,
                    StoreId = x.StoreId
                })
            };
        }
    }
```

Our controller then becomes a lot less verbose. 

```csharp
// StoreController.cs
    [HttpGet("{storeId}")]
    public async Task<IActionResult> GetStore([FromRoute] string storeId)
    {
        var result = await _dbContext.Set<Store>.FindAsync(storeId);
        var storeResource = result.ToResource();
        return new OkObjectResult(storeResource);
    }
```

This is better and our codebase is now much more maintainable because we centralized our mapping and there's no more copy and paste involved
to map our Store objects to a StoreResource object. 

# Using AutoMapper

If our application has many entities, it can be beneficial to automate the mapping from Store to StoreResource. We can do this by
using the library AutoMapper.

AutoMapper is a library that allows us to map an object from one object type to another. AutoMapper does this by trying to map properties
with the same name on the source object and the target object.

We start by adding the following Nuget to our .csproj file
``` xml
//NameOfProject.cs
    <ItemGroup>
        <PackageReference Include="AutoMapper.Extensions.Microsoft.DependencyInjection" Version="8.1.1" />
    </ItemGroup>        
```

Then we add an AutoMapper Profile class to our project which defines the mapping 

```csharp
// StoreProfile.cs
    public class StoreProfile : AutoMapper.Profile
    {
        public StoreProfile()
        {
            CreateMap<Print, PrintResource>();
            CreateMap<Store, StoreResource>();
        }
    }
```

Then in our Startup class, we need to add AutoMapper to our IoC container
  
```csharp
// Startup.cs
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddAutoMapper(typeof(StoreProfile));
    }
```

Finally in our controller, we inject an IMapper instance and modify our Get Method for it to use AutoMapper.

```csharp
// StoreController.cs
    private readonly StoreDbContext _dbContext;
    private readonly IMapper _mapper;
    
    public StoreController(IMapper mapper, StoreDbContext dbContext)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    [HttpGet("{storeId}")]
    public async Task<IActionResult> GetStore([FromRoute] string storeId)
    {
        var result = await _dbContext.Set<Store>().Include(x => x.Prints).FirstAsync(x => x.Id == storeId);
        var storeResource = _mapper.Map<StoreResource>(result);
        return new OkObjectResult(storeResource);
    }
```

There we have it, a different solution to the object cycle detected problem which I believe is very maintainable and easy
to use.

If you have further questions, feel free to ask them here: [arguinjr@gmail.com](mailto:arguinjr@gmail.com?subject=Object%20Cycle%20Detected)
