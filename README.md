# Dolhin Web v3

![React version][react-badge] ![React-router-dom version][react-router-dom-badge] ![Bootstrap version][bootstrap-version-badge] ![GitHub top language][github-top-language-badge] ![GitHub repo size][github-repo-size-badge] [![LinkedIn][linkedin-badge]](https://www.linkedin.com/in/gabriel-peres-bernes/)

Responsive website created with React.js and Bootstrap, to see it live access [Marina Dolphin](http://marinadolphin.com.br/).

## Summary

  - [Getting Started](#-getting-started)
  - [Deployment](#-deployment)
  - [Built With](#-built-with)
  - [Authors](#%EF%B8%8F-authors)

## 🚦 Getting Started

These instructions will get you a copy of the project up and running on your local machine. See deployment for notes on how to deploy the project.

### Prerequisites

To run this project is required to have [Node.js](https://nodejs.org/en/) installed, the instructions for installing it can be found on the Node's page.

You will also need a dependency manager, the main options are [NPM](https://www.npmjs.com/) which is installed with Node.js, or you can get [YARN](https://classic.yarnpkg.com/en/docs/install).

Finally download the [images](https://drive.google.com/drive/folders/1EFNGjs-hM1-Pd_MZc8RSoPidywm6Vb99?usp=sharing) required in the project.

### Installing

Install the dependencies from `package.json`, open a terminal on the project root directory and run:
```sh
$ npm install

# or

$ yarn install
```

Rename the downloaded images directory to `images`, and move it inside `/src`.

To start the application, inside de project root directory run:
```sh
$ npm run start

# or

$ yarn start
```

## 🔝 Deployment

To deploy this aplication, open a terminal on the project root directory and run:
```sh
$ npm run build

# or

$ yarn build
```

## 💻 Built With

* [React](https://pt-br.reactjs.org) - JavaScript library for building user interfaces;
* [React Router Dom](https://reactrouter.com/web/guides/quick-start) - Declarative Routing for React.js;
* [Reactstrap](https://reactstrap.github.io) - Bootstrap framework for React;
* [Animate.css](https://animate.style) - Cross-browser library of CSS animations;
* [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) - Font Awesome icons for React;
* [React Image Gallery](https://www.npmjs.com/package/react-image-gallery) - React carousel image gallery.

## 🙋‍♂️ Authors

* **Gabriel P Bernes** - [GitHub](https://github.com/GabrielPeresBernes) | [LinkedIn](https://www.linkedin.com/in/gabriel-peres-bernes/)

<!-- Markdown link & img -->
[react-badge]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/GabrielPeresBernes/Dolphin-Web-3/master/package.json&label=react&query=$['dependencies']['react']&color=green
[github-top-language-badge]: https://img.shields.io/github/languages/top/GabrielPeresBernes/Dolphin-Web-3?color=red
[github-repo-size-badge]: https://img.shields.io/github/repo-size/GabrielPeresBernes/Dolphin-Web-3?color=orange
[react-router-dom-badge]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/GabrielPeresBernes/Dolphin-Web-3/master/package.json&label=react-router-dom&query=$['dependencies']['react-router-dom']&color=green
[bootstrap-version-badge]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/GabrielPeresBernes/Dolphin-Web-3/master/package.json&label=bootstrap&query=$['dependencies']['bootstrap']&color=green
[linkedin-badge]: https://img.shields.io/badge/Dev-Gabriel%20P%20Bernes-blue?style=flat&logo=Linkedin&logoColor=white
