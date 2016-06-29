# VICE Front-end Coding Exercise

## Overview
Below is a HTML/CSS/JS exercise that involves building out a webpage which involves switching between various shows.

- Feel free to use any JS framework you like or vanilla JavaScript.
- Write your CSS using a preprocessor (Sass, LESS or Stylus).
- Bonus: use a task manager such as Webpack, Gulp, Grunt, etc. to compile static assets.

## Exercise
In index.html, rebuild the mocks in the designs folder in semantic HTML, CSS and JS. The designs represent layouts in a smaller
screen and a larger screen. It is not 2 pages. Feel free to diverge from the designs, and apply your own creativity. The goal is
to build a simple UI, that allows users to navigate between various shows, while displaying the corresponding meta data for each.

### Specs:
- There are 10 shows, each with a id, title, episode count and cover art. (see shows.json).
- When landing on the page initially, the first show should be selected.
- When clicking through the show selector, the single show image, title and episode count also updates.
- The url updates with the currently selected show. (http://{{page_url}}?id=2, if second show is selected)
- A url with http://{{page_url}}?id=2 should have the second show selected on page reload.
- When clicking between shows, hitting “Back” and “Forward” on the browser will also update the url, cover image, title and episode count according to the show id.
- The minimum width of the screen is 320px. The horizontal breakpoint is at 980px. Build with a mobile first approach to RWD.

Have fun with this, show us what you can do, and keep the code DRY.