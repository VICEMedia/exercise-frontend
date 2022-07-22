# VICE Front End Coding Exercise

Hi Vice, it's me, Ro. I've been working on the VICE Front End coding exercise and am ready to submit. 

## Installation

This project is also accessible at: ```https://github.com/RoOLeary/take-home-vce.git```
I'd also suggest upgrading yarn before getting started. Anyways...away we go!

```
$ yarn install
$ yarn build
$ yarn run start

```

```yarn install``` - does what it says

```yarn build``` - run webpack

```yarn run start``` - starts index.html file on http://localhost:4000, with the start command also starting up the
json-server, which will serve the shows.json on http://localhost:3000/shows.json, as per original project structure

This HTML/CSS/JS exercise, involved my building out a single page app, to render a standalone React component to navigate through various VICE shows.

- Use HTML5 semantic markup elements. :white_check_mark:
- Used Styled Components, but used initial scaffolding of SCSS set up. :white_check_mark:
- Use React as the JavaScript library *(I think I might re-do this/similar in NextJS again anyway).:white_check_mark:
- Add one or more unit tests using Jest. :flushed::cold_sweat::disappointed:
- Bonus: Use a module bundler or task manager such as Webpack to compile static assets. Along with this, include a linter for your code (ESLint, Prettier, ect.).

## Exercise, Description, Notes

Component renders index on localhost:4000, and is based off some of the supplied designs. I took some small liberties in the way of typography choices. The component is responsive and adheres to the breakpoints as specified. Application is a single page. Result is a simple UI that allows users to navigate between various shows while displaying the corresponding meta data for each.

Considering the spec and the limited time constraints, I opted to rely largely on the Context API. Cogniscant of the fact tht there would ordinarily be alternative approaches due to *some performance concerns. Nevertheless, I think it was a valid approach. I have written comprehensive comments in the ```/contexts/dataContext.jsx``` file, explaining the set up and what the data's doing...

Essentially, when navigating to the page, the screen (should) render with the initial show details. Clicking along the horizontal scroller can be done to iterate through the shows data. On update, the relevant url parameter is stored, and I'm using sessionStorage to keep track of active items, so that (for example), when the popstate is triggered, there are the correct index defaults stored, which will render the component as expected - otherwise this will default to the first show again. 

If the user refreshes, and the last stored index was off-screen, I included a little check which will scroll to the active element. Additionally, I added (optional) settings buttons/styles, to display pagination errors. The reload/scroll works here, however I think there could be a minor issue of the first index not updating in time. Was going to solve it the quick and dirty way, by triggering a reload first and then checking a flag to enable the toggle. I opted to veer on the side of honesty. Whilst it's there, is just something I noticed. 

Occurred to me during the build, that this kind of slider, whilst navigable, could probably do with some arrow indicators. I've included (and commented for the moment, a "ShowArrows" component which will render responsive arrow indicators and toggle between the shows. Strangely, this feels more sluggish that initially, and I think there's a minor edge case here with the index updating.

### Testing

This wasn't fun. I entered a world of configuration and node error hurt. Including a stunning amount of issues when trying to set up and configure Jest/Enzyme. Unfortunately, here’s where I fell down somewhat and I know it :disappointed: :disappointed: - largely due to overall unfamiliarity with Jest (yes, yes I also know (now)). 

## Specs:

- There are 10 shows, each with an id, title, episode count, and cover art. (see shows.json). :computer: :white_check_mark:
- Load the data using AJAX from `http://localhost:3000/shows` (you can start the server up using `yarn start-api`):white_check_mark:
- When landing on the page initially, the first show should be selected. :white_check_mark:
- When clicking through the show selector the single show image, title, and episode count also updates. :white_check_mark:
- The url updates with the currently selected show. (http://{{page_url}}?id=b2, if second show is selected) :white_check_mark:
- A url with http://{{page_url}}?id=b2 should have the second show selected on page reload. :white_check_mark:
- When clicking between shows, hitting “Back” and “Forward” on the browser will also update the url, cover image, title, and episode count according to the show id. :white_check_mark:
- The minimum width of the screen is 320px. The horizontal breakpoint is at 980px. Build with a mobile first approach. :white_check_mark:
- Bonus: Get this application into a hosted environment. This will include hosting the JSON for the shows and fetching this data. Also.... :flushed::cold_sweat::disappointed: ...sorry about that.

## Gotchas:

- Moved the images into the ```src``` folder
- added screenshots of component in development