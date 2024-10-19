---
title: 'Starting To Learn Hacking'
description: 'Featuring tips from LiveOverflow.'
date: '2022-11-20T00:00:00-07:00'
openGraph:
  imgUrl: '/starting-hacking-2022-11-20.png'
tags:
  - hacking
---

> Image credit: [Hacking Google](https://www.youtube.com/watch?v=5nEyjYn9_LI&list=PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H). It's a great series, I really do reccomend watching it!

I'll preface this by saying that **I know almost nothing about Hacking, Reverse Engineering, etc**. I'm writing this post to share and document the start of my journey in attempting to learn "Hacking". With that out of the way, let's get into it.

## What is hacking?

Hacking is a very, very abstract subject. It's not something you can learn in just a few weeks. But first, what is hacking? According to about 2 minutes of research (wikipedia):

> "A [Hacker](https://simple.wikipedia.org/wiki/Hacker) originally meant someone who likes to do new things with computers. Now hacker is used to mean 'someone who tries to get into another person's computer using computer software such as Trojan horse programs, computer viruses, and worms that can hurt other people computers'."

So "hacking" would be the practice of circumventing obsticals in a technical invironment to do damage. But, what I want to become is a [White Hat Hacker](<https://simple.wikipedia.org/wiki/White_hat_(computer_security)>) which is described as:

> "a type of hacker who hacks computer systems to find security problems and help improve a system."

Which is a lot better on the legal front. And, turns out, this is a real job with a median salary of $90,627 ([Data from Glass Door](https://www.glassdoor.com/Salaries/penetration-tester-salary-SRCH_KO0,18.htm)) for Penetration Testers, great!

## How I Became Interested?

While perusing youtube all the way back in about late 2018, I stumbled upon a youtube channel called [LiveOverflow](). I can't remeber what the first video I saw was, but he did such a great job in explaining what was going on, it just made sense (I already had intermediate computer and programming knowledge at that point). I started to watch more and more and it got me hooked.

I then found LiveOverflow's series covering [binary exploitation on linux systems](https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN). Then his [Pwn Adventure 3: Pwnie Island Post-CTF series](https://www.youtube.com/playlist?list=PLhixgUqwRTjzzBeFSHXrw9DnQtssdAwgG). Even later, I watched his [hardware security research series](https://www.youtube.com/playlist?list=PLhixgUqwRTjyLgF4x-ZLVFL-CRTCrUo03) featuring the Ledger Nano S. Most recently, I watched his [sudo vunlerability walkthrough](https://www.youtube.com/playlist?list=PLhixgUqwRTjy0gMuT4C3bmjeZjuNQyqdx) covering an example usage of [CVE-2021-3156](http://cve.circl.lu/cve/CVE-2021-3156) execute a privelege escalation attack (basically, gain root-level access without the root password).

That's all well and good, but what now? Where should I start? Is there a set path I should follow?

## Finding the way.

Well, [LiveOverflow has created a getting started article](https://liveoverflow.com/faq/get-started-with-hacking/). This is great on the surface, but not exactly a step by step guide. Which makes sense, as said in the attached video.

> "I got frustrated when nobody would write down a clear guide... But the truth is, there is no efficient path."

So, no, there is no set or specific path to learn Hacking. Which is fine, I didn't learn everything I know about development from just one tutorial or guide, but many sources squished together. And I would assume the same is for really anything in the Computer Science field.

Great, there isn't a set path, now what? Do I just look aimlessly for tutorials? No, that wouldn't be helpful at all. Instead you and I might want to look at series like I mentioned eariler. I might start to gain an intuition for certain concepts like:

> "Oh hey, this bit of memory is directly user controled, can I overwrite some pointer or whatever to redirect code execution?"

Like in the sudo bug, where you could abuse a raw memory copy to overwrite a part of the heap. This, therefore, could be used to jump to the code in sudo that opens a terminal for the root user. Some other resources would be:

- Trying CTF's (Capture The Flag) on [CTF Time](https://ctftime.org/).
- Play wargames like [Over The Wire](http://overthewire.org/wargames/), [PicoCTF](https://picoctf.com/), and [Exploit Education](https://exploit.education/).
- Watching videos from [LiveOverflow](https://www.youtube.com/@LiveOverflow), [David Bombal](https://www.youtube.com/channel/UCP7WmQ_U4GB3K51Od9QvM0w), and [Network Chuck](https://www.youtube.com/@NetworkChuck).

A lot of that was taken from either the guide by LiveOverflow or my personal YouTube watch history. But it's all the same, you just need to start developing an intuition and skills little by little.

---

So, in any case, I hope you'll join me on my journey to learn hacking!
