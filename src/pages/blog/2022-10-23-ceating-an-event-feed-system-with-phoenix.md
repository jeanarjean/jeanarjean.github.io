---
title: Ceating an Event Feed System with Phoenix
date: '2022-10-23T18:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ['elixir', 'phoenix', 'ecto', 'indie_hacking']
---

Added an event system that saves every change made to a database entity in [OKR-One](https://okr-one.com/). It took more AND less work than expected at the same time.

![](./events.jpeg)

Saving the changes that are made to an entity was surprisingly easy. Ecto (the default ORM for Phoenix) has this elegant thing called changesets which you can use to alter entities in your app.

https://hexdocs.pm/ecto/Ecto.Changeset.html 

To make changes to an entity and create an event. I first create a changeset, then an operation to update the entity by passing it the changeset, then I create the event by passing the action, the original entity and the changes from the changeset.

![](./update_objective.jpeg)

Since I'm only saving the changes made to an entity and not the whole state of the entity at that point in time, I need a way to replay events to recreate the entity. I had to create an event replay system.

I'm only ever showing events related to a single objective. An objective can have multiple key results, therefore, I also need to show events from the key results when I display events for an objective.

The flow goes like this:
1. Query all the events related to an objective and its associated key results
2. Sort the events by date inserted (we want to replay the oldest events first)
3. Group the events by entity
4. For each group of events, replay the events and create the entity at that point in time, save the result in the backend side struct
5. Degroup entities and sort them by date inserted (we want to display the latest ones first)
I don't want to have to replay the events every time I visit the objective page so I created a cache that stores the replayed events. The cache is invalidated every time a new event is inserted.

![](./eventcreation1.png)
![](./eventcreation2.png)

Turns out I had no paging mechanism in the app and had to create one since the number of events can end up being massive. Used https://tailwindui.com/ for the visual component and implemented the logic from scratch.

![](./paging.jpeg)