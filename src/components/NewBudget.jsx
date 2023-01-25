import {useState} from 'react';
import Message from './Message';

const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault();
        if(!Number(budget) || Number(budget) < 0) {
            setMessage(budget + ' is not a valid budget')
        }
    }
  return (
    <div className="budget-container container shadow">
      <form  onSubmit={handleBudget} className="form">
        <div className="field">
          <label htmlFor="budget">Set Budget</label>
          <input
            type="text"
            className="new-budget"
            id="budget"
            placeholder="add your budget"
            value={budget}
            onChange={e => setBudget(e.target.value)}
          />
        </div>
        <input type="submit" value="Add" />
        {message && <Message type={'error'}>{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
