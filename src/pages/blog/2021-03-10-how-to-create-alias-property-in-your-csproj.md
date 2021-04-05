---
title: How to Use Extern Alias to differentiate assemblies with the same namespace in C#
date: '2021-03-10T24:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ["csharp", "csproj", "msbuild"]
---
If your project contains two assemblies with identical classes and namespaces, you won't be able to differentiate them unless you use extern aliases. In order to use extern aliases, you first need to open the .csproj file of your project. And then modify the PackageReference or ProjectReference by adding the \<Aliases\> attribute.  
If you're referencing another project in your solution, your .csproj should look like this:
			 		 

```xml-doc
// Project.csproj
<ProjectReference Include="..\Example.Project\Example.Project.csproj">
	<Aliases>CustomNamespace</Aliases>
</ProjectReference>
```

or if you're referencing a Nuget then it should look like this:

```xml
// Project.csproj
<PackageReference Include="Microsoft.CodeAnalysis.FxCopAnalyzers" Version="2.9.7">
	<Aliases>CustomNamespace</Aliases>
</PackageReference>
```

Then in any file where you want to reference either project, simply use the following directive to make a distinction between both assemblies.

```csharp
// whatever.cs
extern alias CustomNamespace

// You can then make a distinction between the two assemblies
// The one you used the extern alias on will be available through the specified namespace
using CustomNamespace::whatevernamespace.youwant
// The other assembly which you didn't use the extern alias on will be available through the global namespace.
using global::whatevernamespace.youwant
```

You could also use two custom namespaces to differentiate the assemblies.  
*ProjectName.csproj*
```xml
// Project.csproj
<ProjectReference Include="..\Example.Project1\Example.Project1.csproj">
	<Aliases>CustomNamespace1</Aliases>
</ProjectReference>
<ProjectReference Include="..\Example.Project2\Example.Project2.csproj">
	<Aliases>CustomNamespace2</Aliases>
</ProjectReference>
```

```csharp
// whatever.cs
extern alias CustomNamespace1
extern alias CustomNamespace2

using CustomNamespace1::whatevernamespace.youwant
using CustomNamespace2::whatevernamespace.youwant
```

Comments and feedback are appreciated at [arguinjr@gmail.com](mailto:arguinjr@gmail.com?subject=Extern%20Alias%20CSharp)
