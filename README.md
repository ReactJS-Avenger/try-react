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

Summary - useState
1. The useState hook lets you add state to functional component.
2. In classes, the state is always an object.
3. With useState hook, the state doesn't have to be an object.
4. The useState hook returns an array with 2 elements.
5. The first element is the current value of the state, and the second element is a state setter function.
6. New state value depends on the previous state value? you can pass a function to the setter function.
7. when dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.