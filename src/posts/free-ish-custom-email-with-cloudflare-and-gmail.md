---
title: 'Free-ish and Custom Email'
description: '"How to" on setting up CloudFlare and Gmail to create a nice, custom, email.'
date: '2022-08-02T00:00:00-07:00'
---

Wait, what? This is a post detailing the process of setting up cloudflare email forwarding, adding Gmail's (free) SMTP server, and adding it to your existing email client. By the way, this isn't a tutorial on using Google Workspace, and is an active effort to **not** use it.

But first, I have to explain what this is, and how I found it...

## Backstory and Explanation

I was excited when I noticed this in my cloudflare sidebar (after finally [setting up cloudflare](/blog/adding-rss-and-fixing-hosting)):

![The CloudFlare Email Forwarding Beta.](/cloudflare-email-forwarding-beta-2022-08-02.png)

After running through the setup wizard, I could send myself emails! But I realized that I couldn't send emails back (at least with that address). So I "googled it" and found that you could setup Gmail's SMTP server (a.k.a. a simple mail transport protocol server) to send my emails. And I also setup [spark](https://sparkmailapp.com/) to send my emails too.

## Step 0: Get a Domain

If you didn't realize this already, you need a domain to send your emails from. Gmail's is `gmail.com`, Apple/iCloud uses `icloud.com`, Outlook uses `outlook.com` (among others), etc. You have to own the domain to setup an email under it. I bought [reboot-codes.com](https://reboot-codes.com) from [Dream Host](https://www.dreamhost.com/) for cheap with _free_ WHOIS privacy protection (not an ad, I just really like their registration).

I then linked it with my existing netlify site through cloudflare. That just involved setting the name servers to cloudflare's. Then I set a flattened CNAME (a.k.a. ALIAS) record for the apex domain (`@`) to `apex-loadbalancer.netlify.com`; and another CNAME record for `www` to `reboot-codes.netlify.app`. (I also added the domain to Netlify which gave me a free [Let's Encrypt](https://letsencrypt.org/) SSL certificate, nice!)

## Step 1: Setup CloudFlare Email Forwarding

This involves opening the [cloudflare dashboard](https://dash.cloudflare.com/) and choosing my domain. Then click on the "Email" link in the sidebar; and setup forwarding (its a wizard, so it's not that hard), it has to be a Gmail address for the next step to work!

## Step 2: Setup Gmail SMTP

If you send an email to the address you setup, you will recive it at the address you selected in step 1. This step allows you to send emails from that address.

- Due to security concerns, you will need to [create an application specific password](https://myaccount.google.com/apppasswords), make sure to write it down! (Or save it in a password manager like Bitwarden/Vaultwarden or KeePassXC.)
- Head over to [Gmail](https://gmail.com) and click on settings, and "See all settings". Then click on "Accounts and Import". You'll see a section called "Send mail as:" and click "Add another email address".
- You should have a new window/tab open up. You can change the name if you want, it'll just load your Google Account's name. **Important:** Unckeck the "Treat as an alias." checkbox. Enter the email address you setup in cloudflare, and click "Next Step".
- Set the SMTP server as `smtp.gmail.com` and the port to `587`. The username is your Gmail (the one that you set the app password for). And the password is your app password. Oh, and TLS is fine. Then click "Add Account".

## Step 3: Add the Gmail SMTP Server to CloudFlare

For obvious reasons, you need to add the Gmail SMTP server to your domain's DNS settings. Just add to the/replace the existing value with the following value for your (usually) apex domain's `TXT` value:

```txt
v=spf1 include:_spf.google.com include:_spf.mx.cloudflare.net ~all
```

## Extra: Add the Email to Spark

[Spark by Readdle](https://sparkmailapp.com/) is a great email client for Mac, iOS/iPadOS, Android, and Windows (soon). In spark, you can add the new email address as an alias to your Gmail. Note: **you should not have set the email as an alias in Gmail**, only in Spark.
