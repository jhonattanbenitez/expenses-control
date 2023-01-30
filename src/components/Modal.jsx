import { useState } from 'react';
import CloseBtn from '../img/close.svg';
const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="close modal" onClick={hideModal} />
      </div>
      <form action="" className={`form ${animateModal ? 'animate' : 'close'}`}>
        <legend>New Expense</legend>
        <div className="field">
          <label htmlFor="name">Expense Name</label>
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
        <input type="submit" value="add expense" />
      </form>
    </div>
  );
};

export default Modal;
