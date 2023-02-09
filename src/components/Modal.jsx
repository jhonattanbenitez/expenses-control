import { useState, useEffect } from 'react';
import Message from './Message';
import CloseBtn from '../img/close.svg';
const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense,
}) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setQuantity(editExpense.quantity);
      setCategory(editExpense.category);
      setId(editExpense.id);
      setDate(editExpense.date);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setEditExpense({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, quantity, category].includes('')) {
      setMessage('All fields are requiered');
      return;
    }
    setTimeout(() => {
      setMessage('');
    }, 3000);
    saveExpense({ name, quantity, category, id, date });
  };
  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="close modal" onClick={hideModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className={`form ${animateModal ? 'animate' : 'close'}`}
      >
        <legend>{editExpense.name ? 'Edit Expense' : 'New Expense'}</legend>
        {message && <Message type={'error'}>{message}</Message>}
        <div className="field">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Add the expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="Quantity"
            id="Quantity"
            placeholder="Add the amount expend"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select a category --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="transportation">Transportation</option>
            <option value="enterteinament">Enterteinament</option>
            <option value="health">Health</option>
            <option value="streaming">Streaming Services</option>
            <option value="others">Others</option>
          </select>
        </div>
        <input
          type="submit"
          value={editExpense.name ? 'Save Expense' : 'add expense'}
        />
      </form>
    </div>
  );
};

export default Modal;
