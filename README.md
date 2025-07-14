# BP_HENP

This is the boilerplate for projects with the next tools:
- Headless CMS (Wordpress, Prismic, PayloadCMS, ...)
- Express for setting a backend to allow server side rendering and SEO
- Node (Vanilla JS in this case)
- Pug for HTML templating

---

The main idea of this boilerplate is to be used for Vanilla JS Projects, while keeping it lightweight without any framework.

## SPA or multipage app?

You can decide it yourself, render a new view of the pug template based o the call to the server or fetch the data from another endpoint and modify it in the current page by manipulating the DOM, then prepare the routing.

## OOP or Functional Programming

OOP is encouraged, but can work on FP too. just treat the app folder as you'd do with a frontend application, but taking into account that the html printed will be that in the pug files

### Pending to prepare:

- How to add dynamic data to pug files before sending to client
- How to deploy the project (VPS, Vercel/DigitalOcean/Netlify, Shared and self hosted)