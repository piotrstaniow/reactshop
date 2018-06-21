# Reactshop

Reactshop is an open-source online shopping application.
It's main purpose is to serve as an example of React app during 
the React workshop, so the README file contains all steps that
are taken to create this app.

## Development

### Step 5 - Functional components
For a dumb component that only accept props and render html we may
simplify our code using _functional components_. They do not have their state
nor lifecycle hooks. 

- Extract `header` from `App.js` as a functional component
- Refactor `CategoryItem` to be function that accepts `props` object and
  returns rendered HTML

### Step 4 - lifecycle hooks, fetching from API
React components can have various methods that will be called by the library
in various moments of component lifecycle. We'll use them to fetch data 
from the API. Some of them are: `componentDidMount`, `componentShouldUpdate`,
`componentDidUpdate`, `componentWillUnmount` and `componentDidCatch`.

- Check what the API returns at [http://localhost:3001/categories](`http://localhost:3001/categories`).
- Clear the initial state in `CategoryGrid`.
- Declare `componentDidMount` method in the component. Refer to browsers' native
  [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to
  fetch data from the server.
- When data is successfully fetched, update the state with `this.setState`
  method.
 

### Step 3 - Component state
In this step we're introducing component state

- Declare class member `state` within `CategoryGrid`. As this is the component
  default internal state, initialize it with an empty object. 
- Add a `categories` property to the component initial state that will hold 
  a list of categories to be rendered.
- Render `CategoryItem` elements based on the aforementioned list. 
- Clean up: move the array of categories from `CategroryLayout` to 
  the state of `CategoryGrid`. We'll no longer need the prop `categories`.

### Exercise 1 - Writing container components

- Create `CategoryLayout` component.
- Render a div inside it
- Move rendering `CategoryGrid` from the `App` component to `CategoryLayout`
- Render `CategoryLayout` inside `App`.

### Step 2 - Extracting Components. Components props.

- Create a `CategoryItem` component that will render the same `div` as 
  previously was used inside the container
- Render a property called `name` within the div
- Use the component in `App.js` inside existing `div.category-grid` container
- Create a `CategoryGrid` component
- Assume the component accepts `categories` array as property. Use `map` method
  to produce multiple `CategoryItem`s within render method
- Use the component in `App`

### Step 1 - Warm up
Our first goal is to create a Homepage that a user will see when
visiting our shop. It will display the page layout and categories
available for shopping.

- Look around in `App.js`. It is a right place to render a grid of categories.
  Add `div` container and some `div` elements inside it. You can use 
  `category-grid` and `category-item` classes that already have some CSS styles
  assigned. Add a few categories.
 

### Step 0
The initial application was bootstrapped with `create-react-app`
but it also is combined with an API server made with Express JS.
In order to run the app, please first ensure that you've installed all 
dependencies with `npm install`, then go for `npm start`.
