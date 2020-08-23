## Collaborators APP

This is a project to train some React Hooks skills as a test. I made a simple API in `NodeJS` and I have built some custom hooks for this project.

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
    "joi": "^17.2.0",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.4",
    "react": "^16.13.1",
    "react-bootstrap": "^1.3.0",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.3"
}
```

### What I am implementing?
- You will find a simple CURL API with `get`, `post`, `put` and `delete` methods
- All of those methods updates the render in a table
- As the name of the file says, I'm mocking the date for this table.
- Some things are incomplete, but the major idea is already there. So consider this as a first version of this application.


