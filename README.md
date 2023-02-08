# expenses-control
 
## Imports
The following modules are imported:
- `useState` and `useEffect` from the `react` library
- `NewExpenseIcon` from the `./img/newExpense.svg` file
- `Header` from the `./components/Header` file
- `Modal` from the `./components/Modal` file
- `idGenerator` from the `./helpers` file
- `ExpensesList` from the `./components/ExpensesList` file

## State Variables
The component uses the following state variables:
- `budget`: a numeric value representing the budget of the app.
- `isValidBudget`: a boolean value representing whether the budget is valid.
- `modal`: a boolean value indicating if the modal is open.
- `animateModal`: a boolean value indicating if the modal animation should be displayed.
- `expenses`: an array of expenses.
- `editExpense`: an object representing the expense being edited.

## useEffect Hook
The `useEffect` hook is used to update the modal state when `editExpense` changes. If the `editExpense` object is not empty, the modal is opened and the animation is started.

## Event Handlers
The following event handlers are defined:
- `handleNewExpense`: opens the modal and resets the `editExpense` object.
- `saveExpense`: saves a new or edited expense.
- `deleteExpense`: deletes an expense from the `expenses` array.

## Render
The component returns a structure with the following elements:
- `Header`: displays the header of the app.
- `ExpensesList`: displays the list of expenses.
- A `new-expense` element that displays the "new expense" button.
- `Modal`: displays the modal for adding/editing expenses.
