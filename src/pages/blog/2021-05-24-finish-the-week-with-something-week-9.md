---
title: Finish the Week with Something - Week 9
date: '2021-05-24T24:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ["weekly", "life", "devops"]
---
# Summary
I have decided on goals for the upcoming weeks. I've decided to run a half marathon, setup the development/production environment for my side projects.

# Running
Having a morning run definitely improves my mood during the day, combining this with a cold shower and waking up
whenever my body feels like it (usually between 7 and 8am) has improved my quality of life quite a lot. I feel a lot
less tired during the day and my brain manages to be productive most of the day where it used to have down times where
it would feel too tired to progress.

I've improved my 5km pace quite a lot, I used to run 5km with a pace of 6 min/km and today I've managed to reach
a 5min/km pace. I'll prepare to run for a half marathon within 4 months.


# Side Project *Architecting*
My side project environment will probably be over engineered, but I personally hate working on poorly engineered projects. Therefore, if I want to stay sane, deployment and project setup needs to be as clean and seamless as possible.

I want to create a side project environment where all my projects can talk to each other via a VPN, I want the deployment of all my nodes/side project to be as programming language agnostic as possible. I want to minimize cost, ideally I
don't want to pay more than 20-25cad, up to 50cad dollars a month for the whole thing. Self-Hosting would probably be the *cheaper*
option although that'd would also be the more time intensive and since I value my time, self-hosting isn't really an
option.

The pretty obvious setup I'm thinking of using is having a managed Kubernetes instance deploying docker container, the
pipelines should be pretty simple too since the core thing they have to do is build the docker image and publish it to
a repository, which also implies I need a private repository for my docker images.

So it seems I'm gonna need the following to run my project:
* Managed Kubernetes Instance
* Container image repository
* A managed postgre SQL instance maybe?

