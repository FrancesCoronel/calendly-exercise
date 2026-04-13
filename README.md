# Dog Breeds

Take-home technical exercise for a Software Engineer role.

A content-driven website displaying dog breeds sourced from Contentful CMS.

**Company:** [Calendly](https://calendly.com)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Instructions

This exercise is to help us see how you work in as close to a real world
scenario as possible. For this exercise, you will create the application following
the prompt below. The code you provide will also be used for the technical
panel interview.

You will sit in the seat of the team lead and system architect for this exercise.
You are tasked to build a complex website that informs visitors on dog breeds.
The website will be very large and contain thousands of pages that inform
people on different dog breeds. The stakeholder is excited and hopes this will
go well so they can expand and add cats, horses, reptiles, fish, and other
mammals.

## Pages

You will focus on two pages:

1. A list of dog breeds that will contain six breeds
2. A single breed page that will present a short story about a single breed
as well as:

  - Where the breed originated
  - How long it will live (range)
  - The friendliness of the breed (scale of 1-5)
  - How much they shed (scale of 1-5)

Reference: https://be.chewy.com/dog-breeds/

As the system architect your task is to create a system that will be a basis for
writing a scalable complex website (application) based on the JAMStack
technology. Information to consider before starting to code:

1. The project may grow to a huge project, managed by multiple content
editors.
2. There will be at least five developers working in real time on this project.
3. With this in mind, set up a project, create a breed list page, a single breed
page, and create design system components that are required to build those
pages.
In terms of design system components, there are Buttons, Inputs, Flex, Grid etc.
We are leaving it to you to decide what components will be part of this design
system in this task.

If you have questions regarding what we consider a design system, it’s similar
to Chakra-ui and its basic components like Box, Heading, and others that are
used to style/layout other components.

## Additional details

- Typescript is mandatory
- Design is up to you, but it must have some rules and be consistent
- The design system should be easy to understand and easy to scale
- We would like to see you create this design system using
styled-components, but if you have a different solution that can scale
well in your experience, you are free to provide it
- There is no need for pagination, but if you have time, it’s nice to add it.
- We prefer for you to use Contentful as headless cms, but you are not
limited to it
- The most crucial part is understanding that you can write a complex
system that can scale

## How I approached

Set Up the Next.js and TypeScript Application: Start by creating a new Next.js application with TypeScript. You can use the command npx create-next-app@latest --example with-typescript my-app to create a new Next.js application with TypeScript support.

Set Up Contentful: Sign up for Contentful and create a new space. Within that space, define a content model for "Dog Breed" with fields for all the necessary information (breed name, origin, lifespan, friendliness rating, shedding rating, and a short story).

Connect Next.js to Contentful: Install and set up the contentful npm package to pull data from your Contentful space into your Next.js application. Use environment variables to securely store your Contentful space ID and access token.

Create the Breed List Page and Single Breed Page: Use the getStaticProps function in Next.js to fetch data from Contentful at build time. For the breed list page, fetch a list of all dog breeds. For the single breed page, fetch the specific details for one breed. The single breed page will use dynamic routing in Next.js (e.g., /breeds/[breed]) to create a unique page for each breed.

Set Up Storybook and the Design System: Install and set up Storybook. Then, start creating your design system components. At a minimum, you'll probably want components for layout (like a Grid or Flexbox component), typography (like a Heading component), form elements (like a Button or Input component), and any other reusable elements you need for your breed list and breed detail pages.

Implement the Design System in Next.js: Once your design system components are created in Storybook, you can import and use them in your Next.js application.

Style and Finalize Your Pages: Use your design system components to style the breed list and breed detail pages. Make sure to implement responsive design so your website looks good on all devices.
