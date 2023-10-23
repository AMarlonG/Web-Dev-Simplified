// useContext is a hook that allows you to use the context of a component when you are not inside the component. An example is toggling a theme from a button that is not inside the component that is using the theme, such as a button toggling between light and dark mode.
// useContext is used in conjunction with createContext. createContext creates a context object. This context object is then passed to useContext. useContext then returns the context object.
// useContext helps you avoid prop drilling, which is passing props through components that don't need the props, just to get to the component that needs the props.
// Together with useReducer, useContext can be used to create a global state that can be accessed from anywhere in the app.
// If you need to share state across components, use useContext and useReducer.

// But remember, in React, you should only use global state when you need to. If you can use local state, you should use local state. For example the counter app, you don't need to use global state to keep track of the count, you can just use local state.
// This has a very important implication. If you use global state, you have to be very careful about how you update the state. If you update the state in a way that causes a component to re-render, then all the components that use the global state will re-render. This can cause performance issues. So you should only use global state when you need to.
// So the second aspect to remember is to not put unnecessary states inside of useContext. Only put the states that you need to share across components inside of useContext. If you have a state that is only used by one component, then you should keep that state inside of that component.

// To summarize, create and use states as close to the relevant components as possible.
