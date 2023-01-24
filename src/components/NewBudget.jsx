import React from 'react';

const NewBudget = () => {
  return (
    <div className="budget-container container shadow">
      <form className="form">
        <div className="field">
          <label htmlFor="budget">Set Budget</label>
          <input
            type="text"
            className="new-budget"
            id="budget"
            placeholder="add your budget"
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default NewBudget;
