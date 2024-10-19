---
title: 'Hello World'
description: 'Yet another blog, this time, by Reboot.'
date: '2022-05-16T00:00:00-07:00'
tags: 
 - project:rcgi
---

Hello there, and welcome to my blog.

It took a while to get this set up, and it finally works the way that I want it to.

## How I created this

This stite, as you might have noticed in the footer, is powered by Next.js. It's hosted on Netlify, but that isn't important at the moment.

All of the posts are located in the `src/posts` directory. Then I leverage the SSR part of Next.js to create paths for all of the posts automatically. Most of the hard work is done by a `lib.js` file in the `src/lib` directory. This file contails utility functions that allow Next.js to find, read, and organize all of the posts. Then a `[slug].jsx` file in the `src/pages/blog` directory generates the page for each post. With an `index.jsx` file in the `src/pages/blog` directory which generates the page that shows each post in chronological order. (Since the date is described in ISO 8601, the [Day.js](https://day.js.org/) library can parse it automatically and return a unix timestamp to compare with. E.g. `2022-05-16T00:00:00-07:00 => 16/05/2022`) Everything else is statically defined in `src/pages` or `src/components`. ✨

## Why I created this

I love sharing knowledge about creating just about anything. And I hope that I can share the skills and information that I learn here. I also wanted to have a nice digital portfolio and a home page for my (future) domain.

## In the future

This will hopefully be a useful source of information for those wanting to use or re-create my projects. It was built to be extensible and multifunctional. And I hope it evolves with me throughout the years. I hope you enjoy it and find it useful or entertaining.
