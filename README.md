# VICE Front End Coding Exercise

Below is a HTML/CSS/JS exercise that involves building out a web component, or single page app, to navigate through various VICE shows.

- Use HTML5 semantic markup elements.
- Write your CSS using a preprocessor (Sass).
- Use React as your JavaScript library and try to avoid using Create React App.
- Add one or more unit tests using Jest or Mocha/Chai.
- Bonus: Use a module bundler or task manager such as Webpack to compile static assets. Along with this, include a linter for your code (ESLint, Prettier, ect.).

## Chad Harter's Solution

You can use `npm` or `yarn` for all applicable commands.  `yarn` will be used for all examples in this document.

### Installation

`yarn`

\* If you run into issues with your node version, install the compatible node version with:

`nvm install <version>`

### Running locally

You can run the json-server/api and enable hot-reloading to ease development **all in one command**:

`yarn dev`

Then, go to http://localhost:3001 in your browser.

### Run linters

This will run eslint for all JS/JSX files and stylelint for all SCSS files:

`yarn lint`

### Run unit tests

Run jest unit tests:

`yarn test`

### Build for production

**This does NOT deploy anything**

`yarn build`

This will output minified production-ready source files under the `/dist` folder.

### Simulate a production environment locally

You can view the site as a production simulation using the output from `yarn build` using:

`yarn prod`

Then, just like with `yarn dev`, go to http://localhost:3001 in your browser.

## Exercise
In index.html, rebuild the mocks in the designs folder in semantic HTML, CSS and JS. The designs represent layouts in a smaller screen and a larger screen. It is not 2 pages. Feel free to diverge from the designs and apply your own creativity. The goal is to build a simple UI that allows users to navigate between various shows while displaying the corresponding meta data for each.

## Specs:
- There are 10 shows, each with an id, title, episode count, and cover art. (see shows.json).
- Load the data using AJAX from `http://localhost:3000/shows` (you can start the server up using `yarn start-api`)
- When landing on the page initially, the first show should be selected.
- When clicking through the show selector the single show image, title, and episode count also updates.
- The url updates with the currently selected show. (http://{{page_url}}?id=b2, if second show is selected)
- A url with http://{{page_url}}?id=b2 should have the second show selected on page reload.
- When clicking between shows, hitting “Back” and “Forward” on the browser will also update the url, cover image, title, and episode count according to the show id.
- The minimum width of the screen is 320px. The horizontal breakpoint is at 980px. Build with a mobile first approach.
