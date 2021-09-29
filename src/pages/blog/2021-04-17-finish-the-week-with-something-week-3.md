---
title: Finish the Week with Something - Week 3
date: '2021-04-14T24:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ['weekly', 'life', 'javascript', ' opensource']
---

# Summary

This week, I've worked on my personal website, I released new prints that people can purchase. I also added added analytics to my website which made it easy for me to track how many people visited

# Prints

I've decided to manage the state of the cart manually using Redux, it was pretty easy to setup. I had to
use a cart as initially the website only let you purchase one print a time which didn't require any
state management. I integrate with Stripe, storing products ids in .env file. It's a lot of manual
work to setup a new print as I have to manually add the product ids in the .env file, and add the price
for the different sizes of prints.

# Analytics

For analytics, I used panelbear, it was surprisingly easy to setup.

_Setting up panelbear in a Gatsby website_

```javascript
// gatsby-ssr.js

const PANELBEAR_SITE_ID = "GETYOUROWNID";

const PANELBEAR_CONFIG = {
  site: PANELBEAR_SITE_ID,
  spaMode: "history",
  debug: false,
};

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="panelbear-analytics-src"
      async
      src={`https://cdn.panelbear.com/analytics.js?site=${PANELBEAR_SITE_ID}`}
    />,
    <script
      key="panelbear-analytics-code"
      dangerouslySetInnerHTML={{
        __html: `
          window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
          panelbear('config', ${JSON.stringify(PANELBEAR_CONFIG)});
        `,
      }}
    />,
  ]);
};
```

Panelbear allowed me to determine instagram
isn't such great a channel for me, as I got a single visit from there where as I got a lot more
visits from my facebook post.

![](./channel.png)
