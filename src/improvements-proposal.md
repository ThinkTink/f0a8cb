## Part 2: Written Evaluation

Please provide a markdown file with the answers to the following questions below.
The product team has decided that we want to make improvements to this application.

## Questions:

Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

- Instead of loading the data directly from a local JSON file, I would use the "useEffect" hook to make an API call inside and get the data, which I would assign to a state variable via setState.
- It should always write async logic inside useEffect if its not invoked by an event handler (button example).

Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

- The use of nanoid is a good approach in order to generate keys inside a loop during the UI rendering.
- React makes use of keys to identify DOM elements (for example in a list or table) that are going to be updated/deleted, and thus update the virtual DOM, so these IDS must be unique.
- Some "easy" but not good and not recommended solution is to use the index, because the order of the elements could change, provoking some performance issues with the component's state.

## Considerations

Please format your answers so that they are easy to digest, and do not include any code in your pull request related to these questions above. We will be evaluating both the quality of your answer as well as the quality of your written explanation of that answer.
Please include a file in the root of the repo called improvements-proposal.md that addresses these questions.
