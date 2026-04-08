---
title: Sailing Tutorials
description: Since you can't own shit anymore, crappy guides on "sailing the high seas".
date: '2026-08-04T00:00:00-07:00'
tags:
  - digital sailing
  - tutorial
---

## Basic setup

To start with, please get a VPN. If you're like us and want to have lan-style access to all of your devices, [Tailscale](https://tailscale.com/) with the [Mullvad Addon](https://tailscale.com/docs/features/exit-nodes/mullvad-exit-nodes) is great and can be used for other things too!

Also, I suggest getting a torrenting client like the following:

- [qBittorrent - QT bittorrenting app with a good API and web interface.](https://www.qbittorrent.org/)
- [Motrix - a really good download manager that can also torrent.](https://motrix.app/)

You will also want extra trackers:

- [TrackersList - Best](https://cf.trackerslist.com/best.txt)
- [ngosang/trackerslist](https://github.com/ngosang/trackerslist)

If you have the bandwidth, please seed your torrents for at least 24 hours or more. If you can't, check out a debrid service like [TorBox](https://torbox.app/) which a) might be cool to have for Stremio (later on this page) b) will continue seeding your torrent if it wasn't already cached for 24 hours to 14 days!

## Sites

### Other Guides

- [The c/Piracy Wiki](https://wiki.dbzer0.com/piracy/)

### General

- [1337x](https://1337x.to/) (also see [their status page](https://1337x-status.org/))
- [1337x backup](https://x1337x.cc/)
- [1337x over Tor](http://l337xdarkkaqfwzntnfk5bmoaroivtl6xsbatabvlb52umg6v3ch44yd.onion/) (see [Deep Dark Web Tutorials](/s3cr3ts/deep-dark-web))
- [TPB, of course.](https://thepiratebay.org/) (also see [proxy info](https://piratebayproxy.info/))
- [TPB alt proxy.](https://thehiddenbay.com/)
- [TPB over Onion (also see deep dark web tutorials)](http://uj3wazyk5u4hnvtk.onion)

### Books

- [AA.gl](https://annas-archive.gl/)
- [AA.pk](https://annas-archive.pk/)
- [AA.gd](https://annas-archive.gd/)

## Music

Music is pretty easy to get, just look for stuff on [Soulseek](https://www.slsknet.org/news/node/1) or automatically [download your liked music from YouTube via this nifty script we wrote](/utils/ytm-download.sh) (it uses [YT-DLP](https://github.com/yt-dlp/yt-dlp) and maybe [ffmpeg](https://www.ffmpeg.org/); [deno](https://deno.com/) is also suggested to have for JS chalenges) :3

We have that setup to run every sunday via a [systemd timer](https://codeberg.org/Reboot-Codes/dotfiles/src/commit/983d66128978474ffc152e11a7f9ead9c0ef44ee/nixos/custom-odin-nixos/configuration.nix#L179).

[Strawberry](https://www.strawberrymusicplayer.org/) is a great music player, and will automatically add album art for you! There's also [MusicBee](https://getmusicbee.com/) (superb iTunes SmartPlaylist compatibility) and [AIMP](https://aimp.ru/) (Linux/Windows/Android, we personally use it on android).

## Movies and Shows

Personally, I don't have a lot of spare storage, so I can't download everything I like to watch. *I'm working on that though, stay tuned! I plan to use [Jellyfin](https://jellyfin.org/) and qBittorrent.* So, instead, I use [Stremio](https://www.stremio.com/) to stream everything via [Torrents, using Torbox and Torrentio](http://torrentio.strem.fun/) or [The USA TV addon](https://848b3516657c-usatv.baby-beamup.club/manifest.json) (this is a manifest link to be used directly in Stremio, btw) for live tv... which doesn't work that well, but I don't really care too much.
