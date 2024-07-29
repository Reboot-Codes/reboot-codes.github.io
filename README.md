# Reboot/Fitz's Site

![Last Commit](https://img.shields.io/github/last-commit/Reboot-Codes/new-rcgi) ![Repo Size](https://img.shields.io/github/languages/code-size/Reboot-Codes/new-rcgi?color=brightgreen) ![GitHub Actions Build Workflow Status](https://img.shields.io/github/actions/workflow/status/Reboot-Codes/new-rcgi/build.yml)

This is a remake of RCGI because it's kinda... jank. So, instead, we're using 11ty this go around.

## Build

Install dependencies with yarn and use `yarn build`. Simple as that! Eleventy will take care of building the site. 

## Make Content

### Posts

To make a new post, just create it in `src/posts`. Give it a `title` in the front-matter, and everything else should be handled for you.

Tags automatically have pages generated.

### Projects

To make a project, decide on a project ID (referenced here as `$PROJECT_ID`), then on related posts, tag them with `project:$PROJECT_ID`.

In `src/projects`, make a page where the front-matter looks like the following:

```yaml
title: $PROJECT_TITLE
projectId: $PROJECT_ID
pagination:
  data: collections.project:$PROJECT_ID
```

Where `$PROJECT_TITLE` is the pretty name for the project. The content of that page will be like a blurb displayed above the posts for that project.
