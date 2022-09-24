1. what are hooks?
   Hooks are a new feature addition in react version 16.8 which allow you to use React features without having to write a class.
Example: State of a component
Hooks don't work inside classes.

2. Why Hooks?
Reason Set 1:
Understand how this keyword works in javascript.
Remember to bind the event handler in class components.
Classes don't minify very well and make hot reloading very unreliable.

Reason set 2:
There is no particular way to reuse stateful component logic
HOC and render props patterns do address this problem
makes the code harder to follow
There is need a to share stateful login in better way

Reason set 3:
create component for complex scenario such as data fetching and subscribing to events.
Related code is not organized in one place
Example: Data fetching -  In componentDidMount and componentDidUpdate
Example: Event listeners - In componentDidMount and componentWillUnmount
Because of stateful logic - cannot break component into smaller ones.

