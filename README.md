# README

RecipesManager

Applications for managing recipes, basic functionality:
- Presentation of recipes with a table on the main page
- adding a new recipe
- editing and cloning existing recipes

detailed information about the recipe is presented in the form of a pop-up window, when adding or editing, as well as in the detailed information displayed Title of recipes with the same ingredients
____

This is a basic ruby on rails app with react setup, there is also a docker-compose.yml and a Dockerfile in case they are needed.

React is integrated via https://github.com/reactjs/react-rails and react components are under app/javascript, when loaded the application should just show "App starts here".

If docker is being used the command to start the app is

`
docker-compose up
`

It will reinstall all the dependencies every time is started but it is the easiest setup.

In order to get the react app compile this command needs to be run in another terminal:

`
docker-compose exec app rails r ./bin/webpack-dev-server
`

In general any other command needed like the package installatation follows the same pattern:

`
docker-compose exec app npm install
`
