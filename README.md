# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### React upgrades compared to original "bootstrap-only" version

This site is mainly meant to be an improvement over the "Bootstrap only" version, as well as an opportunity to exercise some React muscles and make something interactive.

### Events page

The "Events" page is the main React feature I added.

Currently it begins by populating with a list of demo events. Then, a new event can be added using the form on the right. (Eventually this will be blocked depending on whether or not a valid user is successfully logged in. In other words, random peopple shouldn't be able to add events--only church staff.)

There is logic inside of "eventSlice" that connects events to the Redux store. Eventually this would need to be connected to an outside database, but for now it operates just using the store.

As far as displaying upcoming events, any events with a date before today will not show up.

The event form should validate whether or not an event is in the future, and whether or not it has a title. An appropriate error message will pop up if these conditions are not satisfied, and the form will not be submitted.

### Login functionality

For now the "Staff Login" button at the top right measures the user inputs against a temporary "dummy" list. If the user is found in the list, they are signed in. Otherwise, an alert pops up advising the username/password was invalid, and they should contact admin if they believe they should be added as staff.

Eventually this would change whether or not the user has access to certain elements--such as adding an event.

### Future changes

The biggest flaw here is that this project is all front-end. Any connections to a database are essentially theoretical at this point. It should be very doable, but one of my future projects is to host a node server with MongoDB, and actually set up a database to track events and users.