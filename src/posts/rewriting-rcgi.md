---
title: Re-writing RCGI
description: "Moving to 11ty because this doesn't actually need next.js... surprisingly."
date: '2024-10-18T00:00:00-07:00'
tags: 
 - project:rcgi
 - software development
---

I mean like, have you [seen that source-code](https://github.com/Reboot-Codes/old-rcgi)? Anyways, thank you to the ever helpful [Bugfish](https://github.com/vguttmann) for help with that. But what runs reboot-codes.com now? [This does!](https://github.com/Reboot-Codes/reboot-codes.github.io)

## Meet 11ty

Pronounced "eleven-tee", 11ty makes generating static sites easy as shit by composing every templating language you've probably heard of but never used into a nice little JS/TS cli.

With a little love and care, it fully replaces what we used to use next.js for; since, after all, we host this site on github pages, so it's not like we're using that interactive island magic, or the API server, etc, etc. 11ty also has a nice little data composition thingle to autogenerate pages based on data we already gave it, or that it pulled from pages that we tagged for example.

It's used by [maia](https://maia.crimew.gay/) (which is where we learned about 11ty in the first place) and just outputs a directory that you can put into any old hosting provider like github pages. 

## Learning Nunjucks

Isn't it spelled nunc- yes, yes it is. But we're talking about [Mozilla Nunjucks](https://mozilla.github.io/nunjucks/), which was inspired by [Jinja2](https://jinja.palletsprojects.com/en/2.10.x/)! (Little outdated actually, since the latest version is actually v3.0, but whatever.) Which is used by [Home Assistant](https://www.home-assistant.io), sweet!

But also, we didn't really... get all that used to jinja, and the variables and functions available in 11ty's env are *way* different, so, it took a bit of learning, but if you checkout the posts page, it has working pagination! [The source code looks like crap tho. As always.](https://github.com/Reboot-Codes/new-rcgi/blob/main/src/_includes/components/pagination.njk) But, we're happy with it.

## Dropping the Tech Bro facade

Originally, we made this site to act as our portfolio/resume. We've since decided that we're not gonna use it like that (mostly because we've made it out of the tech twitter echo-chamber, thank satan), and really just use it like a project log. Check out our ramblings on NixOS and Logseq next!

We really hope to start writing blog posts instead of only rubber ducking to our friends because it's not great to keep all the knowledge to ourself, and also Discord is not a great place to try and keep things long term as we've learned the hard way. (Which is also why we're moving our notes out of there!)
