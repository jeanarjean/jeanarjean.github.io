---
title: How to Validate your AutoMapper Configuration using Unit Test
date: '2021-09-07T24:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ['csharp', 'csproj', 'xunit', 'autofac']
---

_Disclaimer: this article is written using XUnit but could be done using any test framework._

The simplest way to test your AutoMapper configuration is to write a test and create a MappingConfiguration in the test that you're going to validate.

```csharp
using Api.V1.Stores.Resources;
using AutoMapper;
using Xunit;

namespace UnitTest
{
    public class MapperTestManual
    {
        private readonly MapperConfiguration _mapperConfiguration;

        public MapperTestManual()
        {
            _mapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<StoreProfile>();

            });
        }

        [Fact]
        public void ValidateAutoMapperConfiguration()
        {
            _mapperConfiguration.AssertConfigurationIsValid();
        }
    }
}
```

This is very good, however when we create a new AutoMapper profile, we have to remind ourselves to add it to our test.

We can automate this using AutoMapper extensions.

Depending on if you're using AutoFac or the default Microsoft IoC container, the tests won't be the same but will be similar. I'll show
you both alternatives in this article.

# Using Microsoft IoC Container

Note that this requires the use of the package:

```xml
<PackageReference Include="AutoMapper.Extensions.Microsoft.DependencyInjection" Version="8.1.1" />
```

Given a Startup class that has a ConfigureServices method that looks like this:

```csharp
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Startup).Assembly);
        }
```

Our test class should look like this.

```csharp
using Api;
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace UnitTest
{
    public class MapperTestServiceCollection
    {
        private readonly IConfigurationProvider _mapperConfiguration;

        public MapperTestServiceCollection()
        {
            var services = new ServiceCollection();
            services.AddAutoMapper(typeof(Startup).Assembly);
            var container = services.BuildServiceProvider();

            var mapper = container.GetService<IMapper>();
            _mapperConfiguration = mapper.ConfigurationProvider;
        }

        [Fact]
        public void ValidateAutoMapperConfiguration()
        {
            _mapperConfiguration.AssertConfigurationIsValid();
        }
    }
}
```

# Using Autofac

Note that this requires to add the dependency AutoMapper.Contrib.Autofac.DependencyInjection.

```xml
<PackageReference Include="AutoMapper.Contrib.Autofac.DependencyInjection" Version="5.4.0" />
```

Given an AutoFac Module looking like this:

```csharp
// ApiModule.cs
using Autofac;
using AutoMapper.Contrib.Autofac.DependencyInjection;

namespace Api
{
    public class ApiModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAutoMapper(typeof(Startup).Assembly);
        }
    }
}
```

Our test to validate our configuration will look like this.

```csharp
//MapperTest.cs
using Api;
using Autofac;
using AutoMapper;
using Xunit;

namespace UnitTest
{
    public class MapperTestAutoFac
    {
        private readonly MapperConfiguration _mapperConfiguration;

        public MapperTestAutoFac()
        {
            var builder = new ContainerBuilder();
            builder.RegisterModule(new ApiModule());
            var container = builder.Build();

            _mapperConfiguration = container.Resolve<MapperConfiguration>();
        }

        [Fact]
        public void ValidateAutoMapperConfiguration()
        {
            _mapperConfiguration.AssertConfigurationIsValid();
        }
    }
}
```

If you have further questions, feel free to ask them here: [arguinjr@gmail.com](mailto:arguinjr@gmail.com?subject=Validate%20AutoMapper%20Configuration)
