# My Website

![Last Commit](https://img.shields.io/github/last-commit/Reboot-Codes/website) ![Repo Size](https://img.shields.io/github/languages/code-size/Reboot-Codes/website?color=brightgreen) ![License](https://img.shields.io/github/license/Reboot-Codes/website?color=brightgreen)

My website, made with Next.js, and MDX. Hosted with GitHub Pages and cached by CloudFlare. Now with [RSS](https://reboot-codes.com/feed.rss) support!

## To-Do

- [ ] Add a projects page. (Working with @vguttmann on it... Maybe using article tags?)

## Creating a post

Create a new `.mdx` file in `src/posts` with a name that is URL friendly (lowercase with `-` instead of spaces). Then put the following at the top:

```md
---
title: Post Title
description: Slightly Longer Description
date: 'ISO Date/Time'
slug: slug-matching-file-name
---
```

Replace the felids with the values specified, then write the article in markdown.

Generate Open Graph Images with:

```bash
# remove `-gravity north` to center
magick in.png -geometry 1200x630 -gravity north -crop 1200x630+0+0 out.png
```

Pro tip: Generate tweet embeds in twitter and just paste 'em in, but remove the `<script>` tag. Why? Because we have custom styling for tweets now! (Also, make the blockquote a link, makes it easier.) Example usage:

```md
# Directly from twitter embed generator

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Never mind, gonna try to design an ortholinear 65% keyboard (time for some 3D modeling too for a custom case). Also *nice* with that following. I&#39;ll open source it if I ever get it working properly (probably running QMK because I&#39;m lazy). <a href="https://t.co/vRsUVOusjH">https://t.co/vRsUVOusjH</a> <a href="https://t.co/Gr9X3tNrif">pic.twitter.com/Gr9X3tNrif</a></p>&mdash; Ruben (@reboot_hasstuff) <a href="https://twitter.com/reboot_hasstuff/status/1619394396042186753?ref_src=twsrc%5Etfw">January 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# Modified

<a class="twitter-tweet" href="https://twitter.com/reboot_hasstuff/status/1619394396042186753?ref_src=twsrc%5Etfw" target="_blank"><p lang="en" dir="ltr">Never mind, gonna try to design an ortholinear 65% keyboard (time for some 3D modeling too for a custom case). Also _nice_ with that following. I&#39;ll open source it if I ever get it working properly (probably running QMK because I&#39;m lazy). <a href="https://t.co/vRsUVOusjH">https://t.co/vRsUVOusjH</a> <a href="https://t.co/Gr9X3tNrif">pic.twitter.com/Gr9X3tNrif</a></p>&mdash; Ruben (@reboot_hasstuff) January 28, 2023</a>
```
