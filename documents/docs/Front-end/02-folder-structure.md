---
sidebar_position: 2
---

# 02. Folder structure

In this section, we will cover only the directory structure of the front-end section in react js. And we will give a brief explanation of some of the most important folders.

## Frontend directory

```
frontend
├── node_modules
├── public
├── src
├── package.json
└── package-lock.json

```

## SRC directory

The following directory tree should be complied for new implementations.

```jsx title="frontend/"
src
├── api
├── assets
├── components
├── hooks
├── screens
├── theme
├── utils
├── App.js
├── index.js
└── index.css

```

**Assets:** This folder contains all the media assets, such as images, videos, json files, etc...

**Hooks:** This folder contains reusable utility hooks.

**Screens:** This folder contains the group of screens of our application that are used in the route definition.

**Theme:** This folder is contains the files responsible for generating the global styles of the application, such as colors, fonts, dimensions of the margins...

**Utils:** This folder contains utility functions and constants that are used in different parts of the application.

**Assets:** This folder contains all the media assets, such as images, videos, json files, etc...

```
src
├── assets
│   ├── css
│   ├── fonst
│   └── images

```

**Components:** This folder consists of individual components, which are atomic in nature and doesn't compose any other components.

```
src
├── components
│   ├── atoms
│   ├── layout
│   └── organisms


```

## Project structure

```
├─ frontend
│  ├─ .dockerignore
│  ├─ .env.development
│  ├─ .env.production
│  ├─ .eslintrc
│  ├─ .gitignore
│  ├─ .prettierignore
│  ├─ .prettierrc
│  ├─ craco.config.js
│  ├─ Dockerfile.dev
│  ├─ jsconfig.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ src
│  │  ├─ App.js
│  │  ├─ assets
│  │  │  ├─ css
│  │  │  ├─ data.json
│  │  │  ├─ fonts
│  │  │  ├─ images
│  │  │  └─ usuarios.json
│  │  ├─ components
│  │  │  ├─ composed
│  │  │  ├─ layout
│  │  │  └─ units
│  │  ├─ hooks
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ pages
│  │  ├─ setupTests.js
│  │  ├─ theme
│  │  └─ utils
│  └─ tailwind.config.js
```
