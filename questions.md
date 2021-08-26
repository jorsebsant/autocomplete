# Questions

## What is the difference between Component and PureComponent? give an example where it might break my app.

The pure component refers to a pure function basically which is closely related to the functional programming paradigm, a pure function is a function that always will return
the same result for the same input, which means that it will not have any external dependency that will make it change its result, also this means that the function will always
have to return something. For the pure component the objetive is basically the same, is a component that will always render the same component as long as the props of 
the component are pretty much the same, also it means that this component doesnt rely on any external dependency that will make it change what it renders. I.e dynamic data that is coming from a server call.

## Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I really havent been in a situation in which i have tried to use both of those, but this is what i think about this. This can be dangerous because both of them can have conflicts...
the context api will make the consumer to re-render if the state within the context changes, meaning this will have the top priority for re-rendering the consumers, if besides this, we try to use the "shouldcomponentUpdate" we will try to "steal" the context api priority which can lead to a lot of unexpected re-renders or behaviours not that easier to debug...,
this is what i think without using Google hahaha.

## Describe 3 ways to pass information from a component to its PARENT.

- Using the useCallback hook from the parent component(with a setState inside for example) and sending the function from the parent to the child as a prop, so when the child execute the function it will send the data and execute the hook within the parent.

- The above one can be executed pretty much exactly the same without the use of hooks and doing the .bind(this) of the functions that will be passed to the child so the child execute them and send the data to the parent.

- For the third one the only thing i can think of is maybe using Context Api or Redux for the state management which is pretty much self explanatory.

## Give 2 ways to prevent components from re-rendering.

- Validating withing shouldComponentUpdate certain conditions which the component should validate before re-rendering, this is a good practice to avoid unexpected re-renders and improve performance.

- PureComponents will not re-render if its props remains the same.

- React.memo this is pretty much what the PureComponents do, we can use this to wrap a component: React.memo(<MyComponent {...props}/>), and as long as the props doesnt change, the component will not re-render. Have in mind that React.memo is a HOC that makes this whole thing work.

## What is a fragment and why do we need it? Give an example where it might break my app.

- Fragments are just a wrapper component to not rely in the use of unnecessary <div> or other tags to wrap our components. this can be represented by <Fragment> or <> in latest versions. I really cant think of anyway this can make the app break(i haven't had any issues with it). The only thing that you should have in mind is that this is just a wrapper, 
so it will not add any kind of tag to the real DOM, so if you dont have this in mind you may have issues with styles, i really cant think of anything else. Would highly appreciate
a feedback with a case in which the app would break!

## Give 3 examples of the HOC pattern.

- The easier one would be to create a HOC to share state between components(without the use of data manament libraries ofc). This is pretty much how redux works and connects de components pretty much.
- As i mentioned just above. React.memo is a perfect example of higher order component that validates if the component should re-render or not depending if the props of the component have changed.
- The first example can be also implemented not just to share state between components but to share functionality, we can use them pretty much with the same purpose as we would use the decorator pattern but for components if this makes sense. We can inject additional funtionality to the components through the HOC. Just to elaborate a little more i use the decorator example because Angular uses mostly this approach instead of the HOC for this purpose. Take a look at the @Component or @Injectable decorators in Angular.


## How many arguments does setState take and why is it async.

- Just 2 the state obviously and a callback function(i have almost never used the second parameter). It is async because if this wouldn't be async it would be render blocking, which means that while the state is being modified and re-rendering the element the browser whould be frozen if this would be sync, so...that is pretty much why.


## what's the difference in handling exceptions in promises, callbacks and async...await

- In promises the approach to handle exceptions is more likely a functional approach with .catch() method
- For Async Await we use a try and catch block throwing an exception.
- Normally for callbacks there is one parameter with the succesful result and the other with the error like. callback(err, result)

## List the steps needed to migrate a Class to Function Component.

- First obviously remove the Class structure and set it up as a Function const MyComponent = ()=>{} or function MyComponent(){}
- All that was previously inside the render method should be inside of the "return" of this new function.
- All uses of "this" should be removed. This also includes all the bindings done inside the constructor.
- Since we are not longer using "this.state" "this.setState" the best way to replace all of that logic can be achieved using the "useState" hook. import {useState} from React
- All the logic that will have sideeffects like updating the state, should be migrated to use them inside useEffect hook.
- Also all the lifecicles can be replicated with different hooks and different patterns based on hooks. i.E to replace the componentWillUnmount you can use an useEffect with a return
within it, or the componentDidUpdate with an useEffect without second parameter.

## List a few ways styles can be used with components.
- With the proper loader we can import whatever preprocessor we want for this, and just use the proper classes inside the component and import the styles file within the component file.
- Styled components is a way to have like "scoped" styles for each component, which means that you will not have to deal with thinking about different names for each styles or something like that because each style is properly encapsulated for each component. In the dom after the render, this is represented by hashed classes in each dom node accordinly.

## How to render an HTML string coming from the server.
- with innerHtml or dangerouslySetInnerHTML(i had to search for the syntax of this one sorry), both of them have their implications and differences that i cant recall right now, but
i know its not part of the question but if que have to render html from the server i would highly prefer to do SSR instead, just if there is too much html from the server that we need
to render... 

Thanks for the opportunity! if you want me to elaborate in some of my answers just let me know! any feedback is highly appreciated.
