# VICE Front End Coding Exercise

## 🌐 Environment variables

You should add all the required environment variables to a new file called `.env` in the root of the project.
All the required keys can be found in `.env.example`.

## 🏡 Local development

-   install the dependencies using

    ```console
    yarn
    ```

-   open a terminal within the project folder and start the server that provides you the data you'll need to fetch. Run
    ```console
    yarn start-api
    ```
-   open another terminal within the project folder to start you dev server. Run
    ```console
        yarn dev
    ```
-   open your browser and go to http://localhost:3001
-   Tada! 🎉

## 🌎 Environments

-   Local development - [http://localhost:3001](http://localhost:3001)

## 🛠️ Building the project

-   install the dependencies with
    ```console
        yarn
    ```
-   open a terminal within the project folder and start the server that provides you the data you'll need to fetch. Run
    ```console
    yarn start-api
    ```
-   open another terminal within the project folder to build the project & start your production server. Run
    ```console
        yarn build && yarn start
    ```
-   open your browser and go to http://localhost:3001
-   Tada! 🎉

## The Exercise

Build a web component, or SPA, to navigate through various VICE shows.

In index.html, rebuild the mocks in the designs folder in semantic HTML, CSS and JS. The designs represent layouts in a smaller screen and a larger screen. It is not 2 pages. Feel free to diverge from the designs and apply your own creativity. The goal is to build a simple UI that allows users to navigate between various shows while displaying the corresponding meta data for each.

## ToDo List:

-   ✅ Use HTML5 semantic markup elements.
-   ✅ Write your CSS using CSS-in-JS (styled-components)or a preprocessor (Sass).
-   ✅ Use React as your JavaScript library (bonus points for a solid NextJS implementation).
-   ✅ Bonus: Use a module bundler or task manager such as Webpack to compile static assets. Along with this, include a linter for your code (ESLint, Prettier, ect.).
-   🚧 Add one or more unit tests using Jest.
-   ✅ When landing on the page initially, the first show should be selected.
-   ✅ The url updates with the currently selected show. (http://{{page_url}}?id=b2, if second show is selected)
-   ✅ A url with http://{{page_url}}?id=b2 should have the second show selected on page reload.
-   ✅ When clicking between shows, hitting “Back” and “Forward” on the browser will also update the url, cover image, title, and episode count according to the show id.
-   ✅ The minimum width of the screen is 320px. The horizontal breakpoint is at 980px. Build with a mobile first approach.
-   🚧 When clicking through the show selector the single show image, title, and episode count also updates.
-   🚧 Bonus: Get this application into a hosted environment. This will include hosting the JSON for the shows and fetching this data.

## 🤖 TechSpec

-   NextJS
-   TypeScript
-   StyledComponents
-   ESLint
-   Stylelint
-   Prettier

## 📜 Scripts

| Command               | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `yarn build`          | Creates an optimized build. Output: ./next/               |
| `yarn dev`            | Starts the project in development mode                    |
| `yarn eslint`         | Runs the es lint (view .eslintrc.json for more info)      |
| `yarn prettier:check` | Runs prettier to check if all files have been formatted   |
| `yarn start-api`      | Load the data using AJAX from http://localhost:3000/shows |
| `yarn start`          | Runs the optimized build from the build step              |
| `yarn stylelint`      | Runs style lint (view .stylelintrc.json for more info)    |

## 📝 VSCode editor configuration

Code editor configurations are added to the `.gitignore` file.

If you wish to add some handy configuration to your VSCode environment for automatically fixing errors on save, add the following file to the root of your directory:

```json .vscode/settings.json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript", "typescript", "typescriptreact"]
}
```
