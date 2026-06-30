## How it works

The app displays a list of newsletters grouped by site. Each newsletter has a CTA button that changes based on the current user's access rights — `S'inscrire` if the user has access, `S'abonner` otherwise.

The active user profile is stored in the URL as a search parameter (`?user=ONE`, `?user=MULTIPLE`, `?user=NONE`), which triggers a full SSR re-render on each profile switch. A demo switcher in the header lets you toggle between the three mock profiles to see the access logic in action.

## Stack

- **Next.js 14** — App Router, SSR
- **TypeScript** — strict mode
- **styled-components** — component styling
- **PandaCSS** — layout & utilities

### Installation

```bash
npm install
```

> `prepare` is a npm lifecycle script that runs automatically after `npm install`.
> It generates the PandaCSS styles required for the app to work.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

````

## Project Structure

src/

├── app/              # Next.js App Router pages and layouts

├── components/       # UI components

├── mocks/            # Mock data (users and newsletters)

├── services/         # Data fetching layer

├── types/            # TypeScript types

└── utils/            # Business logic helpers

## Environment Variables

Copy `.env.example` to `.env.local` and update the values.


| Variable               | Description           | Default                 |
| ---------------------- | --------------------- | ----------------------- |
| `NEXT_PUBLIC_BASE_URL` | Base URL for metadata | `http://localhost:3000` |



# Getting started

Hello there, you are a new recruit in our frontend team at Les Echos, and your first task is to implement our newsletter page.

You can find the design on our [figma](https://www.figma.com/file/u1hoAP9FOa1FHbBgkE346o/Entretient-Dev-2024?type=design&node-id=1-309&mode=design)

# Disclaimer

Our evaluation focuses on your problem-solving approach and mindset, observing how you tackle challenges and prioritize tasks.

During the interview, explain your decisions and how you'd approach unfinished tasks with you had more time.

It's your thought process and strategy, rather than completion, that we're interested in.

Please do code as you were already a part of our frontend team, it is essential to us.

You have to use NextJS, wether it is the latest version (app router), or if you don't feel comfortable with it, use the pages router.

# What is your mission ?

## Styling

Regardless of point 1 and 2, the page should be responsive.

1. Implement the styling using what you like to use (chakra-ui, material-ui or something else)
2. Implement the styling yourself, using the library of your choice (we are using styled-components and pandaCSS for instance)

:warning: We are not asking for a pixel perfect copy of the figma, we just wanted to gave you a direction on where to go, it does not have to be the exact same thing really, surprise us :warning:

## Features

The current user will be representated by 3 different mock (`USER_WITH_ONE_SUBSCRIPTION`, `USER_WITH_MULTIPLE_SUBSCRIPTION`, `USER_WITHOUT_SUBSCRIPTION`), you can find these at `src/mocks/user.ts`.

What you need to look at is the `subscriptions` key, it represent the subscriptions that the user currently have active.

:warning: The app should be working with all these 3 types of profile in mind. :warning:

## Implement a list of newsletters, grouped by site.

You can find mocks of the items in `src/mocks/newsletters.ts`, you have to display the list of all the newsletters, but grouped by the `site` key.

## The CTA must be different regarding the user's status

In every newsletter object, you have a key `subscriptions`, which is an array of strings, it represents the right needed to access this newsletter.

If the field is an empty array, it means the newsletter can be accessed by everyone, otherwise, the user should have at least of the right listed in the array.

The label of the CTA (call to action) will be `S'inscrire` if the user has access to it, otherwise `S'abonner`

## Everything should be typed

Everything has to be typed with typescript, show us what you can do !

## The newsletter should come from a fetching function

Even if we don't provide an API to call, you have to simulate the fetching.
Also, the app should work in SSR.

# Time

Take around 4 hours to do this test, we really respect your time and don't want you to spend days on this.

# Final word

Good luck and again, please do this as you were already an developer in our team.

If you have any question feel free to contact us and we will quickly respond

```

```
````
