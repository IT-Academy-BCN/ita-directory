# Folder structure 

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
## /src directory

```jsx title="frontend/src/"
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

**Hooks:** This contains reusable utility hooks.

**Screens:**Group of screens of our application that are used in the route definition.

**Theme:** Is responsible for housing the files responsible for generating the global styles of the application, such as colors, fonts, dimensions of the margins...

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
│   ├── composed
│   │   ├── Card
│   │   ├── Map
│   │   ├── Galery
│   │   ├── Charts
│   │   └── ...
│   │ 
│   ├── layout
│   │   ├── Body
│   │   ├── Footer
│   │   └── Header
│   ├── units
│   │   ├── Button
│   │   ├── InputNumber
│   │   ├── PrivacyPolicy
│   │   └── ...

```


