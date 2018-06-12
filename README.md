# Reactshop

Reactshop is an open-source online shopping application.
It's main purpose is to serve as an example of React app during 
the React workshop, so the README file contains all steps that
are taken to create this app.

## Development

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
