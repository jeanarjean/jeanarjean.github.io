---
title: Code Complete
date: "2020-12-13T22:26:00.000Z" 
image: './resources/peace.jpg'
tags: ["programming"]
what: a best of Code Complete
who: nexus, linkedin
---
It's been 16 years since the publication of the second edition of Code Complete and 27 years since the publication of the first edition. 
Considering this is a technical book, it is worth asking whether the book is worth a read considering its age and the evolution speed
of software development.

The book is still relevant and it turns out developping software hasn't changed **that much** during the last 16 years, yes the tools have evolved, but the foundations remain the same. 
The following articles explore my favorite excerpts from Code Coplete.

# The right metaphors for programming
The right metaphor for prorgramming is construction, programming is close to the act of building something. 

*A small project will need less or no planning while a project with a big scope will need a lot of planning to 
minimize uncertainty and clarify requirements 'till they're TOO specified and there's nothing else that is an uncertainty.*

*The bigger the project, the harder it is do changes to the foundation since more things will depend on it. For example, in a shed, it's easy to change a whole wall or a whole room, in a big building,
a room might have certain constraints or dependent rooms that make it much more complicated to change it.*

# Pre-Requisistes, Defects and why Software Quality matters
## Pre-Requisites
Pre-Requisistes are one of the most impactful part of software construction, yet they are very often neglected as they are not a part of software construction that programmers typically like. A software that doesn't
respond to what the client is expecting is no good.

In order to have a greater overview of the system, it is important to always consider what's the problem the software is trying to achieve.  *Don't waste time solving the wrong problem.*
*If a good problem definition hasn,t been specified, you might be solving the wrong problem during construction.*

About 20% of a software development project should be spent collecting pre-requisistes, a good sign that you have spent enough time is being able to tell yourself: 

Try to identify and define the essentials requirements that will have the most impact on the project.

If requirements are unstable, treat requirements as its own project.

*It's as if you were a contractor called to work on a house. Your customer says, "What will it cost to do the work?" You reasonably ask, 
"What do you want me to do?" Your customer says, "I can't tell you, but how much will it cost?" You reasonably thank the custome for wasting your time and go home*.

*Attention to quality at the begining has a greater influence on product quality than attention at the end*

## Defects
The more defects you have in the software you're building, the less you time you spend on building it. The later in the construction phase a defect is detected, the costlier it is to fix it. A defect that could have
been spotted in the pre-requisite phase will be the costliest to correct.

*A defect, the farther on it is detected, the more costly it is,
a defect of the planning phase detected in the implementation phase will be 
much more costly than if it had been detected in the planning phase.*
 
Hence, it is important to ask oursevles how we can minimize defects during construction, so we can spend more time on construction.
## Software Quality
*The General Principle of Software Quality is that improving quality reduces development costs. This principle is based on the fact that the best way to improve productivity to reduce the time spent reworking code.*

The single biggest activity on most project is debugging and correcting code that doesn't work properly. Debugging and associated refactoring and other rework consume about 50 percent of the time on a traditional, naive software-development cycle. Reducing debugging by preventing errors improve productivity. Therefore, the most obvious method of shortening a development schedule is to improve the quality of the product and decrease the amount of time spent debugging and reworking the software.

software defect removal is actually the most expensive and time-consuming form of work for software.

### Software Quality Techniques
Some software quality techniques presented in Code Complete seem to have gone out of fashion for, a useful learning to retain from Code Complete however is that no single software quality technique is sufficient
to remove most of the defects found in the process of software development, software quality techniues are good in combination.

*The upshot is that defect detection methods work better in combination than they do singly. (... )cumulative defect-dection efficieny is significantly higher than that of any individual technique.*


Table 20-2. Defect-Detection Rates  
| Removal Step |  Lowest Rate  | Modal Rate  | Highest Rate |
| --- |  --- |  --- |  --- |
| design reviews | 25% |  35%  |40%  |
| Formal design inspections | 45% |  55% |  65% |
| Informal code reviews | 20% |  25% |  35% |
| Formal code inspections | 45% |  60% |  70% |
| Modeling or prototyping | 35% |  65% |  80% |
| Personal desk-checking of code | 20% |  40% |  60% |
| Unit test | 15% |  30% |  50% |
| New function (component) test | 20% |  30% |  35% |
| Integration test | 25% |  35% |  40% |
| Regression test | 15% |  25% |  30% |
| System test | 25% |  40% |  55% |
| Low-volume beta test (<10 sites) | 25% |  35% |  40% |
| High-volume beta test (>1,000 sites) | 60% |  75% |  85% |

Source: Adapted from Programming Productivity (Jones 1986a), "Software Defect-Removal Efficiency" (Jones 1996), and "What We Have Learned About Fighting Defects" (Shull et al. 2002).


# Software Construction
## Software Architecture
*Architecture refers to design constraints of systemwide, whereas high-level design refers to design constraints that apply at the subsystem or multiple-class level, but not necessarily systemwide.*

*A good architecture should fit the problem. When you look at the architecture, you should be pleased by how natural and easy the solution seems. It shouldn't look as if the problem and archietcture have been forced togheter with duct tape*

*It should be specified what the system aims, for a system that aims for maintenability over performance will be very different than a system designed for performance.*


### Program Organization
The architecture should define the major building blocks of a program.
*What each building block is responsible for should be well defined. A building block should have on area of responsibility, and it should know as little as possible about other building block's areas of responsibility. By minimizing what each building block knows about the other building blocks, you localize infromation about the design into single building blocks.*

Furthermore, the architecture should explain why the program is structured this way.
*In the architecture, you should find evidence that alternatives to the final organization were considered and find the reawsons for choosing the final organization over its alternatives. It,s frustating to work on a class when it seems as if the class's role in the system has not been cleary conceived.*

### Major classes 
*The architecture should specify the major classes to be used. It should identify the responsibilities of each major class and how the class will interact with other classes.*

### Data Design:
*The architecture should describe the major files and tables design to be used.*
 *During construction. such information gives you insight into the minds of the architects. During maintenance, the same insight is an invaluable aid. Without it, you're watching a foreign movie with no subtitles.* 
### Business Rules, business rules that impose certain constraints on the software. 
*If the architecture depends on specific business rules, it should identify them and describe the impact the rules have on the system's design.*
### User Interface Design (decoupled from the main software) 
*The user interface is often specified at requirements time. If it isn't, it should be specified in the software architecture. The architecture should specify major elements of web page formats, GUIs, command line interfaces, and so on. Careful architecture of the user interface makes the difference between a well-liked program and one that's never used*

### Resource Management (managing scarce resources (threads, database connections, etc..)) 
*The architecutre should describe a plan for managing scarce resources such as database connections, threads, and handles.*
### Security 
*The architecture should describe the approach to design-level and code-level secrutiy. If a threat model has not previosuly been built, it should be built at architecture time*
### Performance 
*If performance is a cconcern, performance ghoals should be specified in the requirements.*
### Scalability 
*The architecture should address how it will addresss growth in number of users, numbers of servers, numbber of network noodes, number of database records, size of database records, transaction volume, and so on. If the system is not expected to grow and scalablity is not an issue, the architecture should make that assumption explicit.*
### Internationalization
The architecure should specify how you're going to handle internationalization.
### Error Processing 
Error processing guidelines should be defined at the architecture level. Here are some questions that are important to be considered.
* Is error processing corrective or merely detective.
* Is error detection active or passive?
* How does the system propagate errors?
* What are the convetions for handling error messages
* How will exception be handled? The archietcture should address when the code can throw exceptions, where they will be caught, how they will be logged, how they will be documented, and so on.
* Inside the program, at what level are errors handled? You can handle them at the point of detection, pass them off to an error-handling class, or pass them up the call chain.
* What is the responsibility of each class for validating its input data.
### Fault Tolerance 
*The architecture should also indicate the kind of fault tolerance expected. Fault tolerance is a colection of techniques that increase a system's reliability by detecting errors, recovering from them if possible, and containing their bad effects if not.*
### Architectural Feasibility 
*The architecture should demonstrate that the system is technically feasible.*
### Overengineering      
You can set the engineering requirements in the architecture documentation, this way you can avoid having multiple classes of different qualities. 
*The architecture should indicate cleary whether programmers should err on the side of overengineering or on the side of doing the simplest thing that works*
*A software is only as strong as the multiplications of all the weakest links.*
### Buy-vs.-build decisions 
*The most radical solution to building software is not to build it at all-to buy it instead or to download opens-ource software for free.*
*If the architecture isn't using off-the-shelf components, it should explain the ways in which it expects custom-built components to surpass ready made libraries and components*
### Reuse decisions 
*If the plan calls for using preexisting software, test cases, data formats or other materials, the architecture should explain how the reused software will be to conform ot the other architectural goals-if it will be made to comform.*
### Change Strategy
*The architecture shold clearly describe a strategy for handling changes. The architecture should show that possible enchancements have been considered and that the enchancements most likely are also the easiest to implement.*

## Design in Construction
// TODO what is design
*Regardless of how it's done, small projects benefit from careful design just as larger projects do.*
### Importance of managing complexity
*Managing complexity is the most important technical topic in software development. In my view, it's so important that Software's Primary Technical Imperative has to be managing complexity.*

The goal is to minimize the amount of a program you have to think about at any one time.

The goal of all software design techniques is to break a complicated problem into simple pieces.
- Minimize the amout of essential complexity that anoyne's brain has to deal with at any one time.
- Keep accidental complexity from needlessly proliferating.

*When I am wokring on a problem I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautfiul, I know it is wrong.* - R. Buckminster Fuller

### Desirable Characteristics of a Design
//TODO this shit
#### Minimal Complexity
Make the design as easy as possible to understand.
*If your design doesn't let you safely ignore most other parts of the program when you're immersed in one specific part, the design isn't doing its job.*
#### Ease of Maintenance
*Think of the maintenance programmer as your audience, and then design the system to be self-explanatory.*
#### Loose Coupling
*Loose coupling means designing so that you hold connections among different parts of a program to a minimum.*
#### Extensibility
*Extensibility means that you can enhance a system without causing violence to the underlying structure.*
#### Reusability
*Reusability means designing the system so that you can reuse pieces of it in other systems*
#### High fan in
*High fan-in refers to having a high number of classes that use a given class. High fan-in implies that a system has been designed to make good use of utility classes at the lower levels in the system.*
#### Low-to-medium fan-out
*Low-to-medium fan-out means having a given class use a low-to-medium number of other classes.* If a class uses too many classes, it's probably too complex.
#### Portability
*Portability means designing the system so that you can easily move it to another environment.*
#### Leanness
*Leanness means designing the system so that it has no extra parts* *Voltaire said that a book is finished not when nothing more can be added but when nothing more can taken away.*
#### Stratification
*Stratification means trying to keep the levels of decomposition stratified so that you can view the system at any single level and get a consistent view. Design the system so that you can view it at one level without dipping into other levels.*
#### Standard techniques
*The more a system relies on exotic pieces the more intimidating it will be for someone trying to undestand it the frist time. Try to give the whole system a familiar feeling by using standardized, common approaches.*


# Managing Construction
## How Program Size affects Construction
The bigger the project, the more defects per lines of codes will be present, defects per line of code doesn't scale linearly, the bigger the project, the more
defects per line of code is present.

|Project Size (in Lines of Code) |Typical Error Density |
| --- | --- |
|Smaller than 2K| 0 25 errors per thousand lines of code (KLOC) |
| 2K 16K | 0 40 errors per KLOC |
| 16K 64K | 0.5 50 errors per KLOC |
| 64K 512K | 2 70 errors per KLOC |
| 512K or more | 4 100 errors per KLOC | 
Sources: "Program Quality and Programmer Productivity" (Jones 1977), Estimating Software Costs (Jones 1998).

Productivity is also affected by the project size, the bigger the project, the less productivity is to be expected by programmers.  
![](images/timespentonconstruction.gif)  

Communication also doesn't scale linearly but mulltiplicatively, proportionally to the square of the number of people causing more time to be spent on 
communication and less on programming.

![](images/communication.gif)  

## Treating programmers as people
Good programmers tend to cluster, as do bad programmers, 
*A study proved there was a 3.4 to 1 effort expanded and a 3 to 1 program size difference. Another study, a 5-1 difference in program size and a 2.6-to-1 in time required. Another study.. 80 percent of contribution comes from 20 percent of contributors.a team in the 15th percentile required 3.5 time as much work month as a team in the 90th percentile.*

*The implication for recruiting and hiring is clear. If you have to pay more to get to a top 10 percent programmer rather than a bottom 10 percent programmer, jump at the chance. You'll get an immediate payoff in the quality and productivity of the programmers your organization is able to retain because good programmers tend to cluster.*

### Physical Envrionment
*In summary, if your workplace is a bottom-25 percent envrionment, you can realize about a 100 percent improvement in prdocutvirty by making it a top-25 percent environment. If your workplace is average, you can still realize a productivity improvement of 40 percent or more by making it a top-25 percent envrionment.*

# Software Craftsmanship 
## Toolbox
A programmer's toolbox, using the right tool can make a problem trivial where as using the wrong tools can make it a nightmare. *It's useful to have a large toolbox, in which a multitude of tools can be found, but it is even more to know how and when to apply these tools.*.

The software industry constantly develops new tools that reduce or eliminate some of the most tedious aspects of progrmaming. It is very important to stay up to date on tools in order to be able to do work efficiently.

## Personal Character
*The whole job of programming is building air castles - it's one of the most puerly mental activities you can do.*

*Your employer can't force you to be a good programmer, a lot of times your employers isn't even in a position to judge whether you're good. If you want to be great, you're responsible for making yourself great , It's a matter of your personal character.*

Character is one of the most important thing a software developer can posses, it takes a special kind of person in order to spend 8 hours in front of a monitor trying to solve problems.

Programming is one of the hardest mental task one can do, it is akin to building a sky castle in your head where any distraction will make the castle crumble.
 A mark of a good software developper is acknowledging the lack of mental capacity he has in order to comprehend the entirety of the source code human has for
 programming and trying to reduce the amount of information he needs at any single moment.


*The inwardness of programming makes personal character especially important. You know how difficult it is to put in eight concentrated hours in one day.You've probably had the experience of being burned out one day from concentrating too hard the day before or burned out one month after concentrating too hard the month before.*

### Intelligence and Humility

*Nobody is smart enough to program computers (...). The way you focus your intelligence is more important than how much intelligence you have (...). The people who are the best at programming are the people who realize how small their brains are. They are humble. The more humble you are, the faster you'll improve.*

### Curiosity
*Once you admit that your brain is too small to understand most programs and you realize that effective programming a search for ways to offset thhat fact, you begin a career-long search for ways to compensate. In the development of a superior programmer, curiosity about  technical subjects must be a priority. If you aren't curious enough to keep up with the changes, you might find yourself down at the old-programmers' home playing cards with T-Bone Rex and the Brontosaurus sisters.*

*Programmers are so busy working they often don't have time to be curious about how they might do their job better.*

### Upgrading your awareness
**Build you awareness about of the development process.** *The more aware you are of the development process, whether from reading or fromy our own observation about software development, the better position you're in to udnerstand changes and to move your group in the right direction.*

*If your workload consists entirely of short-term assignements that don't develop your skills, be dissatisfied. A third of what you need to know will be out of date in three years. You're in too much to spend time working for management that doesn't have your interest in mind.*

**Experiment**. *One effective way to learn programming is to experiment wtih programmingand the development process. If you don't know how a feature of your language works, write a short program to exercice the feature and see how it works. You're better off working with a short program to test a concept than you are writing a larger program with a feature you don't quite understand.*

**Read about problem solving** *It was found in a study that human beings don't always discover clever problem-solving strategies themselves, even though the same strategies could readily be taught to the same people.*

**Analyse and plan before you act.**

**Learn about succesful projects** *One good way to learn is to study the work of great programmers. Jon Bentley thinks that you should be able to sit down with a glass of brandy and a good cigar and read a program the way you would a good novel. That might not be as far-fetched as it sounds. Most people wouln't want to use their recreational time to scrutinize a 500-pagesource listing, but manypeople would enjoy studying a high-level diesn and dipping into more detailed source listings for selected areas.*

**Read!** 

*Read the documentation or source code of things you use, you can develop a better understanding, more often than note a class you need has already been developped.*

**Read other books and periodicals**

*One book on software is more than most people in the software industry read each year. If you read even one good programming book every two months, roughly 35 pages a week, you'll soon have a firm grasp on the industry and distinguish yourself from nearly everyone around you.*


### Characteristics That Don't Matter as Much as You Might Think - Experience

*People also put an absurd emphasis on the amount of experience programmers have. "We want a programmer with five years of C programming experience" is a silly statement, if a programmer hasn't learned C after a year or two, the next three year won't make much differrence. This kind of "exeprience" has little relationship to performance.*

*In many fields, a professional who has a history of achivement can coast, relaxing and enoying the respect earned by a string soccesses. In software development, anyone who coast quickly becomes out of touch. To stay valuable, you have to stay current. For young hungry programmers, this is an advantage .Older programmers sometimes feel they've already earned their stripes and resent having to prove themsleves year after year.*


### Habits

*Bill Gates sasys that any programmer who will ever be good is good in the first few years. After that, whether a programmer is good not, is cast in concrete. After you've been programming a long time, it's hard to suddenly start saying "How do I make this loop fast?" or "How do I make this code more readable?" These are habits that good programmers develop early.*

*When you first learn something, learn it the right way. When you first do it, you're actively thinking about it and you still have an easy choice between doing it in a good way and doing it in a bad way. After you've done it a few times, you pay less attetnion to what you're doing and "force of habit" takes over. Make sure the habits that take over are the ones you want.*

## Pick your process
*Always be thinking, "Am I doing this in the right order? Would changing the order make a difference? "Consciously follow a good process. Low level processes also matter.*

*Software development is a creative exercise. If you don't understand the creative process, you're not getting the most out of the primary tool you use to create software-your brain. A bad process wastes your brain cycles. A good process leverages them to the maximum advantage.*

## Experimentation
// TODO FIX THIS
*Electism has a close relative in experimenation. You need to experiment throughout the development process, but zealous inflexibility hobbles the impusle. To experiment effectively, you must be willing to change your beliefs based on the rseults fothe experiment. If you're not willing, experimentation is a grauitous waste of time.*

*A blanket attempt to avoid mistakes is the biggest mistake of all.*

