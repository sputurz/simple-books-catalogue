# Simple Books Catalogue

A web application that allows you to search for books by title via a public API, view results, and add your favorites to your "favorites" while saving the data.

## Features

- Search books by title
- Display book covers, titles, authors, and first publication years
- Add/remove books to favorites stored in localStorage
- Adaptive layout
- Smart DOM reload cards

## Tech Stack

- Vanilla JavaScript (ES6+)
- Vite
- CSS 3
- HTML 5
- Open Library API

## Task

Develop a small web application (without using any libraries or frameworks) that allows users to search for books by title via a Open Library API, view results, and add books to favorites while storing data.
Detailed information about the task in the document:

https://drive.google.com/file/d/1RBRcuH-_oAvtjem5Xs0c4NXZ8I38aYyH/view

## How to run the app

- Install dependencies

```bash
  npm install
```

- Start dev server

```bash
  npm run dev
```

- Create optimized production build

```bash
 npm run build
```

- Preview the production build locally

```bash
   npm run preview
```

- Deploy on Git Pages

```bash
   npm run build
   npm run deploy
```

## Project structure

├──src/  
| ├── assets/ - stores SVG content (.svg files)
| ├── components/ - stores UI reuseble components (.js and .css files)
| ├── features/ - stores component logic (.js files)
| ├── styles/ - stores style CSS (.css files)
| ├── utils/ - stores small utils block (.js files)
| ├──app.js - stores all App logic
| ├──main.js - main JS module file
├──index.html - main HTML file
├──package.json - main NPM file
├──vite.config.js - vite configuration file
├──readme.md - you are here
