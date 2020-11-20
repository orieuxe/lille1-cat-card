# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# Lille 1 cat card

This project aims to be a base of work for Javascript front-end courses.

## Getting started

### Prerequisites

You will need the following things properly installed on your computer :

* [Git](https://git-scm.com/)
* A web browser

### How it works

The project contains :

* 2 HTML pages
* 1 CSS file
* A DOM helper module script
* A data service module script (and its Typescript version)

The 2 HTML pages are static models of application display : A home page with a list of resources and a form to handle Create/Update/Delete operations.

The CSS file provide custom style of the application. Otherwise, [Boostrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) is used.

The DOM helper module is for demo purpose.

The data service module provide application data management. It should be integrated into the application's sources in order to ease data management.

When it comes to implement application with the frontend technical stack of your choice, these files are here to ease HTML/CSS integration and data management so that you can focus on implementing features that transform that static pages into a dynamic web application.

### Dynamic web application

You can see what is expected by going to the `working-app` branch and serve the directory through a web server :

```
$> git checkout working-app
$> npx local-web-server
```

This expose a [VanillaJS framework](http://vanilla-js.com) implementation of the application to `http://localhost:8000`.

All the steps from static files to web application are described through tags : `step-1...step-10`.

## Contacts

Thomas VERHOKEN [![https://twitter.com/tverhoken][1.1]][1]

[1]: https://twitter.com/tverhoken
[1.1]: http://i.imgur.com/wWzX9uB.png