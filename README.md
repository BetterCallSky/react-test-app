This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
This is an example qualification task for React + Redux.

![image](http://take.ms/bdovR)

## Requirements

1. Add form validation to the existing form using [redux-form](http://redux-form.com/7.0.3/).
2. There are 4 fields. Validation rules:
   - `username` - required, must be only a-z, A-Z, 0-9
   - `first name` - required, any string
   - `last name` - required, any string
   - `email` - required, must be a valid email address, you can find a proper module for email validation
3. After clicking on the `Submit` button, the form should be validated, and all invalid fields should be highlighted with the red border.
 You can set `hasError` in the `Field` component.
4. Both sections (accordions) can be expanded or collapsed. After clicking `Submit`, you must expand an accordion if it contains invalid fields.  **It's a very important requirement.**
5. `Outside button` should also submit the form. The only difference is that it's embedded outside of the form. You are not allowed to change that. It must be a separate container.
6. See here the correct implementation http://take.ms/L84Sh. Your solution should work in the same way.


## Implementation Notes

1. Try to keep the whole logic inside redux. Don't use the internal component state to solve the task.
2. You can add libraries redux-saga, redux-observable, redux-logic if it's needed.
3. The accordion component uses its internal state to handle opened/closed state. It should be refactored to use redux.
4. You are free to change/refactor any component.
5. Pay attention to JS code, CSS is less important. Your code should pass ESlint validation by running a command `npm run lint`.
6. There is an example module (`home`) and example containers (`TitleContainer`).
7. It's very important that you use redux-form properly. Any hacks are not allowed.
