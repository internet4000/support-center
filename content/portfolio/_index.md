---
title: Portfolio
---

Find answers to your questions about
[Portfolio](https://portfolio.internet4000.com).

## How to create a portfolio?

To create a portfolio, follow all the steps detailed here
[portfolio.internet4000.com/projects/get-started/](https://portfolio.internet4000.com/projects/get-started/#login).

On the same page should be a link to a chat on which a friendly
community will assurely help you solve any issue you're encountering.

Cheers!

## Failed to load settings from /.netlify/identity

When you arrive on the `/admin` page of your portfolio (for example
portfolio.internet4000.com/admin) , you are getting the following
error: `Failed to load settings from /.netlify/identity`.

The reason why there is this error, is because  Netlify Identify is
not yet setup. This means that it is not yet possible to for you to
**identify** as a user (to login) inside your content manager
interface.

To fix this issue, let's activate Netlify Identify for your portfolio on
Netlify (the place your copy of the portoflio is hosted).

1. go to [Netlify's website](https://app.netlify.com/)
1. search for your Portfolio site and click it to go to its overview
  page.
1. in the configuration menu (at the top of the page), click the link
  "Identify.
1. click the button **Enable Identity**
1. Go the the **Settings and usage** page, and in the **Registration
   preferences** section select *Invite only*, so only selected users
   can edit the content of your site.

Now if you go back to **your-website.netlify.con/admin**, refresh the
page in your browser, and the error should have disapeered.

Notes: by enable Identify on Netlify, the missing configuration file
needed by netlify-cms were created, and can now be used to very which
users are authorized to make updates to your Portfolio site.

## Login your Content Manager (CMS)

In order to edit your content, you need to login your **Content Manager
System**.

To do that you have two solutions:
- use your Github account to login (just like you would do on a third
  party website with your Twiiter, Google or Facebook account)
- create a Netlify Identify user, with your email and password.

### Activate login with Github

1. go to [Netlify's website](https://app.netlify.com/)
1. search for your Portfolio site and click it to go to its overview
  page.
1. in the configuration menu (at the top of the page), click the link
  "Identify.
1. now click the **Settings and usage** button
1. scroll to the section **External providers**
1. add the **Github** provider, and *use [the] default configuration*
1. Scroll to the *Git Gateway* section and enable it.

Now you can goto your website's admin page
[https://your-site.netlify.com/admin/](https://your-site.netlify.com/admin),
and login by clicking on Github's button.

This way, all users who are able to edit this Github's project
repository will also be able to login.

### Activate login with email and password (Netlify Identity)

1. go to [Netlify's website](https://app.netlify.com/)
1. search for your Portfolio site and click it to go to its overview
  page.
1. in the configuration menu (at the top of the page), click the link
  "Identify.
1. now click the **Settings and usage** button

## Git Gateway Error:

"Your Git Gateway backend is not returning valid settings. Please make
sure it is enabled".

1. go to [Netlify's website](https://app.netlify.com/)
1. search for your Portfolio site and click it to go to its overview
  page.
1. in the configuration menu (at the top of the page), click the link
  "Identify.
1. now click the **Settings and usage** button
1. Scroll to the *Git Gateway* section and click "Enable Git Gateway"



