---
title: 'Adding RSS to my site (and fixing hosting).'
description: 'Next.js + GitHub Pages + CloudFlare'
date: '2022-11-19T00:00:00-07:00'
tags: 
 - project:rcgi
---

With the recent twitter turmoil, I decided to update my website and blog. Personal sites are now kinda like [the vinyl of the internet](https://twitter.com/geerlingguy/status/1593399133645295616); and I like that. The site now has RSS and _actually works_ (see `Hosting`).

## Adding RSS

[RSS or Really Simple Syndication](https://en.wikipedia.org/wiki/RSS) is a format that allows a user to subscribe to a feed. (By the way, I use [Reeder](https://www.reederapp.com/) to consoom RSS feeds.) When I added custom post support to this site, I created a function that returned all the posts (this then generates all the pages that Next.js renders for `/blog/[slug]`.) This function is also useful for generating an RSS feed. It's waaaay too complex to cover here ([here's the file that does this](https://github.com/Reboot-Codes/reboot-codes.github.io/tree/main/src/lib/genRss.js)), but the gist is that we generate an RSS feed template with an array of post objects, render the XML, then write that XML to a file (`feed.rss` in the project's public folder). This happens in the `yarn build` command, after we run `next build`.

## Hosting

With the _relativley_ new news of [Heroku dropping their free teir](https://help.heroku.com/81MBEG7L/how-do-i-upgrade-from-heroku-s-free-tier-and-begin-using-paid-resources) (now you have to pay $5/mo for dyno hours), I decided to move my website to GitHub pages. (The source code was already open source anyways, so it isn't a big deal.) Which is great and all, but I had a problem; Next.js sites like to be served with the built in Next.js server.

With heroku, I could just tell it to build the site, then run the server provided by Next.js; behind cloudflare of course. But GitHub pages only serves static content, which means I have to use the dreaded `next export` command. But after a bit of fanangling, I got it to work with a github workflow that runs on every push. (Check out the [pages.yml](https://github.com/Reboot-Codes/reboot-codes.github.io/blob/main/.github/workflows/pages.yml) that I got from the [Next.js on GitHub Pages Demo](https://github.com/vercel/next.js/tree/canary/examples/github-pages).)

But, I had another problem. I kept getting redirected to the apex domain (with 301's). Turns out, you have to dissable the cloudflare proxy when using custom domains on GitHub pages. After that, I decided to write this article and work on something else.
