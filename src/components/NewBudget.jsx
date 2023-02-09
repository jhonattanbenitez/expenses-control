import { useState } from 'react';
import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState('');

  const handleBudget = (e) => {
    e.preventDefault();
    if (!budget || budget < 0) {
      setMessage(budget + ' is not a valid budget');
      return;
    }
    setMessage('');
    setIsValidBudget(true);
  };
  return (
    <div className="budget-container container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
          <label htmlFor="budget">Set Budget</label>
          <input
            type="number"
            className="new-budget"
            id="budget"
            placeholder="add your budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Add" />
        {message && <Message type={'error'}>{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
