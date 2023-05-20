# resty

## Lab 26

React App that communicates with an API using REST

## Build

npm start

## Technical Requirements

### Lab 26

Refactor the RESTy application as follows:

1. Convert all child components of `<App />` from classes to functions.
    - The `<App />` component serves as the container for all sub-components of this application.
    - Leave this component as a Class.
    - Make sure all base styles for `<App />` are included in a .scss imported within the App.jsx file.
    - Ensure that the `<Header />`, `<Footer />`, `<Results />` and `<Form />` components are imported using ES6 import syntax.
2. Use .scss files to style each component.
    - Each of the components use their own .scss file for styling.
3. Core application functionality should remain unchanged.
    - The `<Form />` component should:
      - Call a function onSubmit() that updates the `<App />` component via a function sent down as a prop so that the app can process the form values.
    - The `<Results />` component should show mock API results.

### Lab 27

Extend your React Application so that your functional components are able to manage their own state variables using the useState() Hook.
NOTE: It is not a requirement to make the actual API call. That can be mocked with “fake” data.

1. Refactor any components using this.setState() to implement the useState() react API hook.
2. Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

Suggested Component Hierarchy and Application Architecture:

- `index.js` - Entry Point.
- `<App />` - Container.
  - Holds application state: The Request (from the form) and the Response (from the API).
  - Hook that can update state.
  - Renders 2 Child Components.
- `<Form />`
  - Expects a function to be sent to it as a prop.
  - Renders a URL entry form.
  - A selection of REST methods to choose from (“get” should be the default).
    - The active selection should be displayed/styled differently than the others.
  - Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request.
  - On submit:
    - Send the Form entries back to the `<App />` using the method sent down in props.
    - Form will run the API request.
      - Toggle the “loading” status before and after the request.
- `<Results />`
  - Conditionally renders “Loading” or the data depending on the status of the request.
  - Expects the count, headers, results to be sent in as props.
  - Renders the count.
  - Renders the Result Headers as “pretty” JSON.
  - Renders the Result Body as “pretty” JSON.

### Lab 28

Extend your application to include the ability to send http requests and display response data, when the `<Form />` component experiences a submission event.

Refactor application methods to allow for browser side HTTP requests to be sent.
Your implementation should allow the user to set a url, method, and request body.
Make sure all relevant request and response data is displayed to the User.
Suggested approach:

- `<Form />` component, onSubmit() sends the user’s entries to the `<App />` via method sent in through props.
- `<App />` does a check on the request data from the form and updates the request variable in state with the url, method, and potentially the body.
- `<App />` has an effect hook that’s looking for changes to the request variable in state, and in response, runs the API request with the new request options from state.
- `<App />` updates state with the results of the API Request.
- `<Results />` sees the new API data as a prop and renders the JSON.

Note: update your `<Results />` component to use a 3rd party component to “pretty print” the JSON in a color-coded, user-friendly format.


## Collaborated With

- Michael Dublin