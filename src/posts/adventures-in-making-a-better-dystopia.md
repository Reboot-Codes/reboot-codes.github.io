---
title: "Adventures in Making a Better Dystopia"
description: "Mostly by adding in the cybernetics; can't do much about the drab cities tho. Add some damn neons!"
date: '2024-10-22T00:00:00-07:00'
tags:
  - project:clover
  - engineering
  - software development
  - transhumanism
---

Cybernetics? Why, yes!

## Furries, Therianopathy, and Species-dysphoria

Species dysphoria is a biiiitch. And, now, I'm not saying that every furry is a therian, and vice-versa, however, there's a pretty good overlap between the two in our circles.

Personally, we are all doggie in one way or another, and we are a furry to compensate for that. Besides, this fandom is actually pretty awesome most of the time, and is full of creative and caring people.

In such, we thought it'd be nice to have a set of fursuit parts that change along with our expressions that we can wear daily for long periods of time. And we also thought that other people might want this too. And that not everyone is a canine. And that everyone is also really fucking creative so what if we made it very modular and extendable and-

## No such thing as a "minimum viable product."

Sorry, but uh, yeah, no, there is no such thing as perfection. Creating what amounts to a "cybernetics API" as one of our partners put it, is hard. And we're not gonna create it perfectly on the first try. It took us about a month or so to make just the event bus, let alone create what amounts to [AOSP](https://source.android.com/) as a collection of dogs in a single skin-suit. Plus, we wanna make sure that it's secure since it could be used against the user. Which, of course, is a big no-no in the world of both [cybersecurity](/tags/hacking) and [engineering](/tags/engineering), specifically in engineering ethics, which we're being told is actually pretty important.

So, in the end, Clover will continue to be developed as we see fit, and as we have time. We wanna get this done pretty soon in the grand scheme of things, but it's kinda hard to make such a complex project in a fast amount of time.

## Structuring

This is a quick blurb intro into what clover is made of. If you want a *good* breakdown, check out [the manual](https://clover.reboot-codes.com/docs/components/intro) since it gets updated as we develop clover itself. 

Anyways, [CloverHUB](https://clover.reboot-codes.com/docs/components/clover-hub/intro) is actually built on [Rust](https://www.rust-lang.org/) and [Warp](https://github.com/seanmonstar/warp) plus [Tokio](https://tokio.rs) at the core, and we compose a bunch of processes around it to manage things like containerized applications, hardware-accelerated rendering, and machine-learning-powered expression detection. All handled securely with full transparency to make sure that the user is informed of what's happening on their body.

Since Clover could be used to manage intimate mechanisms after all. (Yes, this does mean [buttplug.io](https://buttplug.io/) compatibility, don't you worry about it.) So we find it to be very clear in what things can and can't do. And this all runs on the parts that you wear. Theoretically, it's fully independent from any other devices/systems/etc, but you might wanna use a phone or watch or even laptop/desktop to control/manage/debug/develop for it, so we're working on a cross-platform app called [Spanner](https://clover.reboot-codes.com/docs/components/spanner/intro) to take care of that for you.

## FOSS Body-Modding

Now that the base of Clover has been laid out in the most vague way possible. What can... you actually do with it?

Well, a few examples that we thought of were animatronic fursuit parts that react to the wearer's expression, which we'll be getting into with a ["little" library](/projects/taurus) that we had to write... sooner or later, but Clover is designed to be extended and used with many other custom parts and systems.

Especially for something that is as customizable as one's body, we kinda find it really shitty that manufacturers get to basically lock out people from using things attached/integrated into their own body. Especially things like prosthetics, insulin pumps, hearing aids, pacers, etc, etc. Clover isn't specifically a medical platform by any means, but a [Home Assistant](https://www.home-assistant.io/)-esque platform would be amazing for things like this.

Besides, [transhumanism](https://www.youtube.com/watch?v=DqPd6MShV1o) (please go watch this, Abby is so cool and this subject amazes us) fucks, and we aren't human in the first place.

---

Expect more posts about Clover and its related properties in the future, like, a lot more.
