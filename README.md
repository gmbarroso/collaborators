## Collaborators APP

This is a project to train some React Hooks skills in a more structure project. I made a simple API in `NodeJS` and I have built some custom hooks.

### Let's get started
- `git clone` this repo to your local system
- `yarn install` or `npm install` to get all the dependencies
- `node mock-api/app.js` or `node mock-api/app.js` to run the api locally at port `3001`
- `yarn start` or `npm start` to run the application at port `3000`

### Routes
The major route for this application and the only one for now is `/collaborators/`
- `GET` - `/collaborators` and `collaborators/:id`
- `POST` - `/collaborators`
- `PUT` - `collaborators/:id`
- `DELETE` - `collaborators/:id`

### Dependencies
```
{
    "body-parser": "^1.19.0",
    "bootstrap": "^4.5.2",
    "express": "^4.17.1",
    "i18next": "^19.7.0",
    "joi": "^17.2.0",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.4",
    "react": "^16.13.1",
    "react-bootstrap": "^1.3.0",
    "react-dom": "^16.13.1",
    "react-i18next": "^11.7.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.3"
}
```

### What I am implementing?
- You will find a simple CURL API with `get`, `post`, `put` and `delete` methods
- All of those methods updates the render in a table
- As the name of the file says, I'm mocking the data for this table.

### Running tests
During the implementation of this app, I only did tests for the front and it still wasn't enough alongside what I would have liked to have done. So, for other further versions I hope to cover this app with more tests. The tests that I made was unit test for the front, testing the requisitions, if it manages correctly the collaborators. My idea was to test the components at the same time that test the app in e2e tests with `cypress` but, as I said, I'll make it for further versions.

- `node` or `nodemon mock-api/app.js`
- `yarn test`

### Some further notes
Please, notice that I developed this application in to the `develop` branch. I merge it in to the `master` branch. The `develop` branch is still open so you can see my commits. My commit messages will help you to see how I think while I developed the containers and components of the application.


