This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

to the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### React upgrades compared to original "bootstrap-only" version

This site is meant to be an improvement over the "Bootstrap only" version, as well as an opportunity to exercise some React muscles and create something interactive. With this in mind, I won't go too much into style choices, layout, etcetera, but will instead focus on the work I did on the interactive portion.

### Events page

The "Events" page is the main React feature I added.

Currently it begins by populating with a list of demo events. Then, a new event can be added using the form on the right. (Eventually this will be blocked depending on whether or not a valid user is successfully logged in. In other words, random peopple shouldn't be able to add events--only church staff.)

There is logic inside of "eventSlice" that connects "events" to the Redux store. For now it operates just using the store and client state, but my next project is to decide where to set up a node server with MongoDB and make an actual back end.

For a better user-experience, any events with a date before the current date will not show up.

The event form validates whether or not an event is in the future, and whether or not it has a title. An appropriate error message will pop up if these conditions are not satisfied, and the form will not be submitted.

Once an event is submitted, the list will update accordingly, displaying all future events in date order. In other words, if you add an event between two existing events, they will still display in date order.

### Login functionality

For now the "Staff Login" button at the top right measures the user inputs against a temporary "dummy" list. If the user is found in the list, they are signed in. Otherwise, an alert pops up advising the username/password was invalid, and they should contact admin if they believe they should be added as staff.

This also is a feature I look forward to perfecting. One of my upcoming classes is on setting up MongoDB and an Express server, and I plan on creating a database to track users and events.

### Future changes

The biggest flaw here is that this project is all front-end. Any connections to a database are essentially theoretical at this point. It should be very doable, but one of my future projects is to host a node server with MongoDB, and actually set up a database to track events and users.

Events should not be able to be added by anyone--only users. Further, only event creators or admins should be allowed to change or delete events.

### Final thoughts

React was a bit of an uphill battle to learn. Specifically, trying to wrangle components to visually display how I expected was difficult at times, trying to correctly use bootstrap classes, or use react-bootstrap components. However, the strength of React is not how it looks visually, but rather being able to flexibly create components and use client-side logic to do things. Although it was challenging at first--I remember when useState seemed like an alien language--I definitely want to continue getting practice, becuase that helps really solidify how things work. I look forward to a time when all of the React hooks seem as familiar and sensible as useState does now.