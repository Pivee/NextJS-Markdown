# NextJS Markdown

A minimalist implementation of NextJS + Markdown to produce simple articles.

## Development

This is a NextJS project under the hood. All things Next are applicable here.

### How to run the project locally

#### Step 1: Install the npm packages required

```sh
npm install
```

#### Step 2: Run `next dev` (or the following)

```sh
npm run dev
```

## How to add articles

The file structure in this project is like this:

```sh
│   .eslintrc.json
│   .gitignore
│   next-env.d.ts
│   next.config.js
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│
├───articles ⬅️ Put MD files here
│       markdown-guide.md
│
├───interfaces
│       IMDArticle.ts
│       IMDFrontMatter.ts
│
├───pages
│   │   articles.tsx
│   │   index.tsx
│   │   _app.tsx
│   │
│   ├───api
│   │       hello.ts
│   │
│   └───articles
│           [slug].tsx
│
├───public
│       favicon.ico
│       vercel.svg
│
└───styles
        globals.css
```

When you create an MD file inside `/articles` folder, it will be automatically listed in `/articles` page using the front matter defined inside the file. That's all really...

## What's next?

Well... that's up to you. As I said in the very beginning, this is a minimalist approach; this does not even have much CSS in it. You can add Authentication, Routing, Navigation and whatnot around this bare-bones implementation and build something cool!
