---
title: Programming Projects
date: '2021-09-30T18:00:00.000Z'
image: './resources/peace.jpg'
song: 'oogway - two years'
backgroundColor: 'white'
tags: []
---

_Last updated September 30th, 2021_

## DragonRuby Game Toolkit games

[<img src="./boux.png">](https://jeanarjean.itch.io/boux)

These are really simple little games I made using DragonRuby Game Toolkit and my friends faces. I really liked that it was the simplest of thing to publish
to [itch.io](https://itch.io/) with DragonRuby. It made iterating a game really fast and rewarding as you could easily share your progress with your
friends. I ended up making two games, [boux](https://jeanarjean.itch.io/boux) and [fatdandy](https://jeanarjean.itch.io/fatdandy). The sound is messed up
on the html versions and the games don't work on mobile but it is what it is.

[</> Ruby](https://github.com/jeanarjean/dragonrubygamedev)

## jeanarjean.com store

[<img src="./store.png">](https://jeanarjean.com/store)

_December 2020 - Now_
In december 2020, it had been 3 years since I started photography and I had always been interested by entrepreneurship so I decided to open
my first store. A place where I could sell prints of my photos. I created a store section in my website, which includes 10 items, 3 options for print size,
a cart section which lets the shopper combine prints in one order and is fully integrated with [Stripe](https://stripe.com/). CSS and React was done by hand, no help from external UI libraries. I use [Gelato](https://www.gelato.com/) to manage orders and have the prints printed and shipped.

[</> GatsbyJS, Stripe, HTML, CSS](https://github.com/jeanarjean/jeanarjean.github.io/tree/develop)

## SDL2 Mech Game

_June 2019 - June 2020_

A game I made to familiarize myself with C++, game development and entity component systems. I used minimal tools to make the game including
[Simple DirectMedia Layer 2 (SDL2)](https://www.libsdl.org/index.php), a cross-platform library to access low-level APIs of the platform the game runs on,
[Box2D](https://box2d.org/) as the 2D physics engine, [entt](https://github.com/skypjack/entt) as the Entity Component System, [CMake](https://cmake.org/) as the build tool and [Conan](https://conan.io/) as the package manager.

The game was originally just a version tracked tutorial of [Lazy Foo' famous SDL/Game programming tutorial](https://lazyfoo.net/tutorials/SDL/), I then
started experimenting with the tutorial, changing the sprite to the face of DOOM, adding gravity to the sprite which applied downward speed to the sprite
every game tick. I then transformed the tutorial into an object-oriented project since this is what we still learned at my school in 2019 (GET WITH THE
TIME [ÉTS](https://www.etsmtl.ca/), COME ON).

One thing led to another, I then needed a matrix library with led me to [Eigen](https://eigen.tuxfamily.org/index.php?title=Main_Page). The docs for Eigen
told me the best way to get Eigen running in my project was to use [Conan](https://conan.io), the C++ package manager, so I added Conan to my project,
messed with my CMake configuration to plug Conan packages into it and we were ready to go again.

At this point in time, I was very interested in [Entity Component Systems(ECS)](https://en.wikipedia.org/wiki/Entity_component_system), to me object oriented
programming made no sense at all when it came to game development, I didn't understand why the objects themselves should be responsible for rendering
themselves and operating their physics, there had to be external **system** responsible for it. After trying very very unsuccesfully to create my own
ECS, I found out about [entt](https://github.com/skypjack/entt), and boy it was great. I migrated my use of SDL to Conan too which wasn't too easy since I
ran into some DEBUG_LEVEL_ITERATORS issue which at the time I had no idea what it meant.

THEN, I wanted physics, real complicated physics, so I started creating my own physics system, until I realized that was its own side project and it would
be longer than making a game, I decided to use [Box2d](https://box2d.org/), which integrated eh poorly with entt but it was all good, it still worked and
it was a much better option than creating my own.

I then created a way for sprites to be played in my game, I created a little function to read aseprite export format which allowed me to play games, I then
added music and sound effect to the game. I then realized, if I wanted my game to have levels, I should be able to make games using an external tool and
import it into my game, so I created another function to read tilemaps from an exported format (I don't remember which one I was using).

And at this point I kind of had a game. I had set a goal for myself to have a working level and ship it. I reached my goal, and sent the binary to
my friends, it was barely a game but I had put so much effort into it, I was pretty proud of the mess I had created. And I still sucked at C++ and CMake.

[</> C++, SDL2, entt, Box2D](https://github.com/jeanarjean/jeanarjean.github.io/tree/develop)

## is it 4pm yet

[<img src="./isit4pmyet.jpg">](https://isit4pmyet.com/index.html)

_March 2020_

A simple clock for 8 to 4 workers. Not much to say really, try it!

[</> Vanilla Javascript, HTML, CSS](https://github.com/jeanarjean/isit4pmyet)

## Brainy Dump

![](./brainydump.jpg)

_February 2019_

Brainy Dump was a note taking app that allowed the user to easily keep a journal on different topics. A note could be assigned to more than one topic and
every topic was readable chronologically in its own page. It worked pretty much the same way as the tags on this website. Development was abandoned because I discovered Notion that I now use to build a personal knowledge base and started using my own note taking system that is simply a git repository with
markdown files.

[</> Elixir, VueJS, Phoenix, Postgres, Auth0, Digital Ocean](https://github.com/jeanarjean/brainy_dump)

## Desert Toy Train Animation

[<img src="./deserttrain.jpg">](https://jeanarjean.com/desert-train-threejs/)

_February 2019_

An animation of a train rolling on tracks made using ThreeJS. I made it while I was following a computer graphics class in University and I was curious to see what in-browser rendering could do. I was pleased to learn ThreeJS was very easy to use and quick to learn.

[</> ThreeJS](https://github.com/jeanarjean/desert-train-threejs)

## jeanarjean.com

[<img src="./jeanarjean.png">](https://jeanarjean.com/)

_May 2018 - Now_

I've been maintaining this website for a few years and it's been through a few iterations. At first it was a website with a Node.js server hosting
links to my photos. I made it to learn frontend development and javascript since at the time I was a total newbie in these areas.
It then transitioned to a kind of portfolio/personal website with a blog section. I migrated the website to Gatsby.js when I kept hearing about
Jekyll static websites and I was looking for a static website generator with which I could use React since I wanted to learn React. I also used the project
as an opportunity to learn CSS, so I did all of the CSS by end, no frameworks, which I now very much regret since I wish I could just use a UI library to
have nice looking components quickly.

[</> GatsbyJS, HTML, CSS](https://github.com/jeanarjean/jeanarjean.github.io/tree/develop)

## Simple Scoreboard

[<img src="./simplescoreboard.jpg">](https://jeanarjean.com/simplescoreboard)

_April 2018_

A really simple scoreboard for 2 teams, I was pretty disappointed when the first google result for a simple score board wasn't an actual simple score
board so I decided to create one quickly. Made using boring technology, AKA plain old vanilla Javascript, HTML, CSS so I shouldn't have to maintain it actively.

[</> Vanilla Javascript, HTML, CSS](https://github.com/jeanarjean/simplescoreboard)

# Credits

this project page is inspired by this website, I thought it was clever to have my project section as a blog post instead of being a _modern_ web design page with cards and such. It's a lot easier to maintain this
way.
https://legacy.t3.gg/projects
