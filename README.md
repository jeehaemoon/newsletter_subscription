# Newsletter Subscription

## Introduction

My goal was to create a Newsletter Subscription screen using **React** and **Figma**.

## Concept

I took inspiration of the [SIA Innovation](https://www.siainnovations.com/) in order to create a design that could be use for the official website.

The color schemes and the simple UI was carefully thought to match the industry in question.

## Run-through

To start `yarn install` and a `yarn start` in the `client` folder

There are 4 `input` fields:

- Name
- Company
- Email
- Checkbox to confirm subscription

All these inputs use the same resusable component `Input.js`.

There are 2 `button` components:

- Submit
- Reset

All these buttons use the same resusable component `Button.js`

When the values are entrered in their respective fields, an `handleChange` function updates the `formData` state.

Once the `Reset` button is clicked, it resets the form.

Once the `Submit` button is clicked, it checks if:

- Name is not empty
- Company is not empty
- Email is in the valid form
- Checkbox is checked

I implemented two different methods to go this way:

1. To use `required` in the `input`
2. To create different functions to check if all values were entered correctly. If not an error message was stored in `error` state to be displayed in `red` at the bottom of the form.

If the form was completed successfully, using `history.push` the user is sent to the `confirmation` page.
