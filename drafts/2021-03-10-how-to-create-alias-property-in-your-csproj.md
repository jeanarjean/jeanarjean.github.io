---
title: How to Use Extern Alias to differentiate assemblies with the same namespace
date: '2021-03-10T24:00:00.000Z'
image: './resources/white.jpg'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ["C#", "csproj", "msbuild"]
---
If you run into two assemblies with identical class and namepsace, you won't be able to differentiate them unless you use extern aliases. In order to use extern aliases, you first need to open your .csproj file of your project. You then need to modify the PackageReference or ProjetReference by adding the \<Aliases\> attribute inside.
If it's another project in your solution:
			 		 
```xml
<ProjectReference Include="..\Example.Project\Example.Project.csproj">
	<Aliases>CustomNamespace</Aliases>
</ProjectReference>
```

or in the case of a referenced Nuget

```xml
<PackageReference Include="Microsoft.CodeAnalysis.FxCopAnalyzers" Version="2.9.7">
	<Aliases>CustomNamespace</Aliases>
</PackageReference>
```

Then in any file you want to reference either project, simply use the following directive to make a distinction between both assemblies.

```cs
extern alias CustomNamespace

// You can then make a distinction between two assemblies
using CustomNamespace::whatevernamespace.youwant
// The other assembly which you didn't modify in your .csproj will still be using the global namespace
using global::whatevernamespace.youwant
```

Have a good day!