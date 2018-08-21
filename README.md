# Front End Stack

[![Build Status](http://img.shields.io/travis/pixelfusion/front-end-stack/master.svg?style=flat-square)](https://travis-ci.org/pixelfusion/front-end-stack)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A boilerplate used by the Front End team at [Pixel Fusion](https://pixelfusion.co.nz), a Product Design studio based in Auckland, New Zealand.

Further documentation around the architecture, techniques and best practices used in this boilerplate can be found in the [Front End Stack Wiki](https://github.com/pixelfusion/front-end-stack/wiki).


## Requirements
- Node.js > 10.7.0 (`brew install node`)
- NPM > 6.1.0 (installed as part of Node.js)

---

## Branch Architecture
The repository is divided into three branch categories: Feature, Hotfix, Iteration, Test. Both Feature and Hotfix branches should be directly linked to an open issue: [FESt/issues](https://github.com/pixelfusion/front-end-stack/issues)

#### Branch Categories
- **Feature**: Should be used for developing any feature e.g `feature/button-style`
- **Hotfix**: Used for bug fixing in either iteration or feature branches e.g `hotfix/button-alignment` or `iteration/redux-ducks/hotfix/router`
- **Iteration**: Used for different build iterations but keep the same CSS Architecture e.g `iteration/redux-ducks`
- **Test**: Create testing branches in either root or iterations for shared experiments. `test/chunking-experiment`

Note: For **Iteration** branches create a `sass/test.scss` file to house any custom styling. This is to avoid conflicts when merging the CSS Architecture (`sass/*`) from Develop.

#### Active Iterations:
- [Redux Ducks](https://github.com/pixelfusion/front-end-stack/tree/iteration/redux-ducks)
- [Redux Module State Hierarchy](https://github.com/pixelfusion/front-end-stack/tree/iteration/redux-module-state-hierarchy)

---

## Installing
Run `npm install` to install the project.


## Running
Run `npm run start` to watch and compile the Javascript and SCSS files. The project uses:

- **Typescript** for type checking and ES20xx features.
- **PostCSS**, to allow us to use:
    - Autoprefixer, to take care of those pesky prefixes...which are [being phased out](https://webkit.org/blog/6131/updating-our-prefixing-policy/)!
- **Jest**, to handle Unit testing of the Javascript.
- **Webpack**, for compiling TS, SCSS, etc.
- **Express** to allow server-side rendering, and for serving static assets.
- **React** as a view layer.

View the Style Guide at `https://localhost:3000/style-guide`


## Building
Run `npm run build` to create a production ready `dist` folder with all necessary assets. Running `node dist/server/main.js` will start the server in production mode, enabling server-side rendering. 


## Linting
To run both linters, use the following command:

	npm run lint

To just run the Typescript linter:

	npm run lint-ts

To just run the SASS/CSS linter:

	npm run lint-scss


## Testing
To run the Jest unit tests, use the following command:

	npm test

---

## Browser Support
Supported and tested in the following browsers:

- Chrome
- Firefox
- Safari 11
- Edge 15


## Polyfills
The following polyfills have been included by default, ensure you remove any unused ones to cut down on file size and unnecessary JavaScript execution. Polyfills are only loaded for older browsers (Internet Explorer and Safari < 10).

- [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) - Adds modern ES6 language support to older browsers (including *Promises*).
- [SVG4Everybody](https://github.com/jonathantneal/svg4everybody) - Adds the ability to implement `<use></use>` SVG element in older browsers (IE10), for use with external SVG loading.
- [whatwg-fetch](https://github.com/github/fetch) - Adds `fetch()` support to older browsers.


## Gotchas
- Always set width and height on <svg> elements which implement external `<use>` elements, otherwise Internet Explorer does not display them.


## Inspiration
Our base HTML is inspired by:

- [HTML5Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [HEAD](https://github.com/joshbuchea/HEAD)
