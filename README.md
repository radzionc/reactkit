# RadzionKit: Speedy Setup for Robust Full-Stack Monorepo Projects

![RadzionKit](https://kit.radzion.com/images/banner-2x.png)

RadzionKit is the ultimate solution for developers looking to jumpstart their projects without the stress of complex setups. Designed as a comprehensive monorepo, it provides an integrated suite of tools for full-stack development, from a robust UI library to streamlined backend services. With RadzionKit, you save valuable time both in kicking off new projects and during the development process, ensuring a smooth, efficient, and hassle-free coding experience. Embrace the power of simplicity and efficiency with RadzionKit — your partner in transforming coding challenges into coding triumphs.

## Monorepo Overview: Inside RadzionKit's Diverse Package Ecosystem

RadzionKit takes advantage of pnpm workspaces to streamline a monorepo setup, organizing code into two primary directories: `lib` and `product`. The `lib` folder houses generic code packages like `@lib/utils` or `@lib/ui`, designed to be project-agnostic and easily portable to any project without carrying over project-specific logic. On the other hand, the `product` directory houses example implementations, such as `@product/api` or `@product/ui-demo`, that serve as blueprints demonstrating how to integrate and adapt the `@lib` packages to the unique needs of your project. This thoughtful architecture not only streamlines the development process but also enhances the reusability of code, making it effortless to scale and modify your project as it grows.

### Lib Packages

* [**@lib/utils**](lib/utils/README.md) - A collection of utility functions for common tasks.
* [**@lib/ui**](lib/ui/README.md) - A versatile UI library with components, hooks, and utils.
* [**@lib/dynamodb**](lib/dynamodb/README.md) - Utilities for working with AWS DynamoDB.
* [**@lib/dnd**](lib/dnd/README.md) - Components and utilities for drag-and-drop functionality.
* [**@lib/codegen**](lib/codegen/README.md) - Code generation utilities for TypeScript and JSON files.
* [**@lib/countries**](lib/countries/README.md) - Types and utilities for handling country-related data.
* [**@lib/lambda**](lib/lambda/README.md) - Utilities for working with AWS Lambda functions.
* [**@lib/analytics-ui**](lib/analytics-ui/README.md) - Components to integrate Amplitude analytics into your React application.
* [**@lib/auth**](lib/auth/README.md) - Types for authentication sessions and OAuth providers.
* [**@lib/next-ui**](lib/next-ui/README.md) - Components and utilities for Next.js applications.
* [**@lib/subscription-ui**](lib/subscription-ui/README.md) - Components for subscription payments.
* [**@lib/subscriptions**](lib/subscriptions/README.md) - Types for subscription payments.
* [**@lib/chain**](lib/chain/README.md) - Utilities for working with Web3 and blockchain.
* [**@lib/chain-ui**](lib/chain-ui/README.md) - Components for Web3 applications.
* [**@lib/countries-ui**](lib/countries-ui/README.md) - Components for country flags and selection.

### Product Packages

* [**@product/app**](product/app/README.md) - A Next.js application template.
* [**@product/api**](product/api/README.md) - A boilerplate API with user authentication.
* [**@product/api-interface**](product/api-interface/README.md) - Interfaces and types for interacting with the API.
* [**@product/api-ui**](product/api-ui/README.md) - React hooks and components for API interaction.
* [**@product/config**](product/config/README.md) - A shared configuration package for the product.
* [**@product/db**](product/db/README.md) - Database management and utilities.
* [**@product/email**](product/email/README.md) - Email-related services and utilities.
* [**@product/email-forwarder**](product/email-forwarder/README.md) - A Lambda function for forwarding emails.
* [**@product/entities**](product/entities/README.md) - Core entities and models for the product.
* [**@product/entities-utils**](product/entities-utils/README.md) - Utility functions for working with entities.
* [**@product/languages**](product/languages/README.md) - Language support and localization utilities.
* [**@product/languages-next-ui**](product/languages-next-ui/README.md) - Next.js UI components for language handling.
* [**@product/ui-demo**](product/ui-demo/README.md) - Demo UI showcasing product components.

## Getting Started with RadzionKit: Launching Your New Project

Kickstart your project using the RadzionKit GitHub template. You can remove any packages you don't need and use the ones under `@product` as a starting point for your app. There's no need to rename packages, as the naming convention separates reusable packages (`@lib`) from project-specific code (`@product`). Once you've cloned the template, install dependencies using `pnpm install`, and your setup is ready to go.

## Package Management & Dependencies

This project uses [pnpm](https://pnpm.io/) for package management and workspace handling.

### Working with pnpm

- Install all dependencies: `pnpm install`
- Add a dependency to the root: `pnpm add -w <package>`
- Add a dependency to a workspace: `pnpm --filter @lib/ui add <package>`
- Run a script in a workspace: `pnpm --filter @lib/ui <script>`
- Run a script in all workspaces: `pnpm -r <script>`

### Upgrading pnpm and Dependencies

To upgrade pnpm to the latest version and update all dependencies across all workspaces, you can use the provided npm script:

```bash
pnpm upgrade-all
```

Or run the script directly:

```bash
./upgrade-all.sh
```

This script will:
1. Update pnpm to the latest version
2. Update the packageManager field in package.json
3. Update all dependencies in all workspaces to their latest versions

This will ensure you're using the latest version of pnpm and all dependencies across your monorepo.

## Examples Using RadzionKit

- **[Radzion's Resume](https://github.com/radzionc/resume):** A Web3 Front-end developer resume.
- **[Pentafret](https://github.com/radzionc/guitar):** A website with guitar music theory tools.
- **[Crypto](https://github.com/radzionc/crypto):** Web3 tools.
- **[AI](https://github.com/radzionc/ai):** Fix the grammar of selected text with a shortcut.
- **[Storage](https://github.com/radzionc/auto-drive):** Save files on a distributed storage network.
- **[GeorgianCitizen](https://github.com/radzionc/georgian):** An exam prep app.
- **[Increaser](https://increaser.org):** A productivity toolkit designed for remote workers.

## RadzionKit Cookbook: Simplifying Development with Practical YouTube Tutorials

To maximize your experience with RadzionKit, we've compiled the RadzionKit Cookbook, a series of YouTube tutorials designed to showcase the toolkit's practical applications in solving everyday development challenges. These tutorials cater to all skill levels, from beginners to experienced developers, and cover a range of topics from initial setup to advanced integrations. The RadzionKit Cookbook videos are an invaluable resource, offering step-by-step instructions, practical tips, and expert insights, all aimed at helping you harness the full power of RadzionKit for efficient, elegant solutions in your development projects.

* [Mastering Bitcoin's UTXO Model with TypeScript](https://youtu.be/ocOq7n4oRVcs)
* [Fretboard Theory in Code: Visualizing Guitar Scales with React & Next.js](https://youtu.be/Zox_7loIJsk)
* [Build an Ethereum Trade History Chart with React & TypeScript](https://youtu.be/HSHv2ajOxnc)
* [Tracking EVM Trades with React and Alchemy](https://youtu.be/L0HCDNCuoF8)
* [Swap EVM Tokens to Bitcoin with THORChain in React](https://youtu.be/m91CLBMchTE)
* [Step-by-Step Guide to Creating a TypeScript Crypto Trader](https://youtu.be/-yhW9d0qxG4)
* [0x Swap API + AWS Lambda: Automating Limit Orders in TypeScript](https://youtu.be/Pl_YqcKeUPc)
* [Build a Grammar Correction Tool on Mac with TypeScript and OpenAI](https://youtu.be/iKfjkjg4c7E)
* [Build a Crypto Price Alert System with TypeScript, AWS Lambda, and Telegram](https://youtu.be/qtmcExYyW48)
* [Creating a Decentralized File Manager Using Auto-Drive and Next.js](https://youtu.be/OinVy0VxhGg)
* [Build a Single-Page Resume with React & TypeScript (Exportable as PDF!)](https://youtu.be/Ujb6Nix1l2g)
* [How to Create an Effective "What's New" Feature for Your Product](https://youtu.be/r2toBBz8t_w)
* [Master Drag-and-Drop with dnd-kit: Kanban Board Tutorial](https://youtu.be/GEaRjSpgycg)
* [Efficiently Delete Inactive User Data Using TypeScript and AWS Lambda](https://youtu.be/hDpjM87x6kE)
* [Creating a DayInput Component with React and TypeScript for Date Selection](https://youtu.be/wXEBxu94t58)
* [Implementing a Custom Dropdown Component in React with TypeScript and Floating-UI](https://youtu.be/qhdqL_2JB7g)
* [Next.js & Amplitude: A Guide to Effective Analytics Integration](https://youtu.be/_XBk-OZR0qg)
* [How to Build a Community-Driven Feature Proposal System with React & NodeJS](https://youtu.be/PXad8WzI0L0)
* [Effortless Email Setup on AWS: Save Time and Money with Lambda and Terraform](https://youtu.be/jgFdZ2kBu0w)
* [Creating an Interactive Time-Tracking Report with React and TypeScript](https://youtu.be/gMZPIyhdQLI)
* [How to Create an Effective Onboarding Flow in React: A Step-by-Step Guide](https://youtu.be/G8U0qAc2MZE)
* [Creating a Drag-and-Drop Todo List in React: A Complete Tutorial](https://youtu.be/GicEFePmO4U)
* [Creating a React Line Chart Component from Scratch](https://youtu.be/8gJ5g0OW6qY)
* [Building a website landing page in TypeScript monorepo: A Developer's guide](https://youtu.be/_v63kPS9-s4)
* [Simplifying TypeScript Backend Development: A Comprehensive Guide](https://youtu.be/BDGR2ji5DWg)
* [Building Internationalization in a Static NextJS Application Without External Libraries](https://youtu.be/V2FgF1AekUQ)
* [NextJS Meta Tags Guide: SEO & PWA Icons](https://youtu.be/uqI6BwnIs8I)
* [Creating a Reusable Combobox with React and TypeScript](https://youtu.be/0Ok3SD4hT-Y)
* [Auto-Generating TypeScript for Dynamic React Components: A Deep Dive](https://youtu.be/_z_kAB5LRgM)
* [Building a Subscription Payments System with Next.js & Node.js](https://youtu.be/ghTNoWkkf-0)
* [Creating a Responsive and Minimalistic Modal Component in React](https://youtu.be/Sp-KmZfUWn8)
* [Magic Link Email Authentication for NextJS + NodeJS Applications](https://youtu.be/b_BZKpeLxO0)
* [Maintaining React State in a URL Query String with NextJS](https://youtu.be/fLx-JvNa450)
* [Full-Stack Implementation of OAuth 2 Authentication (Google & Facebook) with NextJS and NodeJS](https://youtu.be/ysj0XNAolEc)
* [Creating Different Layouts for Different Pages in NextJS](https://youtu.be/hrSBxLlZsCc)
* [Efficient React State Management with usePersistentState and Local Storage](https://youtu.be/_90rzlGy0SM)
* [Useful CSS Utils for React Projects - A Practical Guide](https://youtu.be/wBpoknNn6II)
* [Essential Utilities & Helper Functions for TypeScript Projects](https://youtu.be/bWLeNhFaGRg)
* [How to Set Up a Monorepo with Yarn Workspaces, NextJS, Styled Components, Prettier](https://youtu.be/T6pWiEHVhBE)
* [Deploying a NextJS Static App to AWS S3 and CloudFront](https://youtu.be/ekvQBFsCOnU)
* [Designing a Color Palette for Dark and Light Modes with React, Styled Components and HSLA](https://youtu.be/N5nsvOmSUrU)
* [HSLA Color Format for React: TypeScript, Styled Components, Variants, Colors Generator, Color Picker](https://youtu.be/f3_TYR-8Sd8)
* [Advanced React Button Component Tutorial](https://youtu.be/D2AmZCuk18Q)
* [How To Make Tooltip React Component with Arrow using Floating UI](https://youtu.be/gt-29kdEwtA)
* [Copy Text to Clipboard on Click React Component](https://youtu.be/sUKTden0DSI)
* [How To Make Popover Menu React Component With Floating UI](https://youtu.be/dW9nVeeVc20)
* [How To Make Emoji Input Menu React Component with Emoji Mart](https://youtu.be/sSGxGmUx00g)
* [How To Make Hover Effect Overflow Its Container with React](https://youtu.be/35XAA5Hgag0)
* [How To Make Slider Component with React & Style Range Input](https://youtu.be/HqfFtOh8_50)
* [Building Versatile React Components: Cards and Panels](https://youtu.be/cY-wADVIrRQ)
* [Efficient CSS Layouts with Stack Components](https://youtu.be/iVYo-gqyi90)
* [Dynamic Form with react-hook-form useFieldArray](https://youtu.be/QYVlkk6WMmc)
* [Infinite Scroll Component with React Query](https://youtu.be/mZfDvfs2GtI)
* [A Deep Dive into React: useElementSize Hook and Resize Observing](https://youtu.be/PQ7QKBz_zWE)