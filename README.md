# My Website

![Last Commit](https://img.shields.io/github/last-commit/Reboot-Codes/website) ![Repo Size](https://img.shields.io/github/languages/code-size/Reboot-Codes/website?color=brightgreen) ![License](https://img.shields.io/github/license/Reboot-Codes/website?color=brightgreen)

My website, made with Next.js, and MDX. Hosted with GitHub Pages and cached by CloudFlare. Now with [RSS](https://reboot-codes.com/feed.rss) support!

## To-Do

- [x] Add a projects page. (It's in the home page, duh)
- [ ] Add a mastodon feed. ([maybe using this](https://timpurdum.com/2022/11/19/mastodon-feed-in-jekyll.html))

## Creating a post

Create a new `.mdx` file in `src/posts` with a name that is URL friendly (lowercase with `-` instead of spaces). Then put the following at the top:

```md
---
title: 'Post Title'
description: 'Slightly Longer Description'
date: 'ISO Date/Time'
slug: 'slug-matching-file-name'
---
```

Replace the felids with the values specified, then write the article in markdown.

Generate Open Graph Images with:

```bash
magick in.png -geometry 1200x630 -gravity north -crop 1200x630+0+0 out.png
```
