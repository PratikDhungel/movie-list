# Movie List

This app gives you a list of movies with the details about the genre, plot and additional information about the director.
Currently the app is being served using github pages at: https://pratikdhungel.github.io/movie-list/.

### Package setup

Initially, run the following command to setup the necessary packages.

    yarn

### Running the app

To run the app in the development mode, use the following command. This will run the app in the port 3000 (http://localhost:3000).
Hot reload has been enabled.

    yarn start

### Building the app

To create a production ready build of the application, use the following command.

    yarn build

### Linting and Formatting

To run the linter on the code, use the following command.

    yarn lint

Similarly, to format the the code, use the following command.

    yarn format

Note: Both of these command will before each commit. In the case of errors, the commit will not be successful until the errors are fixed.

### Testing

To run the all the tests in the project, we need to run the following command. The tests are run using the Jest framework.

    yarn test

### Deploying

Github Pages has been used to deploy the app in the proved URL. To deploy the changes of the current branch, we need to run the following command.

    yarn deploy

### Auto Deploy

A Github Workflow has been create to deploy the app automatically whenever a new push is made to the master branch.
