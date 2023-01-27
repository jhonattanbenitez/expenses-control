import { useState } from 'react';
import NewExpenseIcon from './img/newExpense.svg';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(0);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(() => {
       setAnimateModal(true)
    }, 1500)
  };

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="new-expense">
          <img
            src={NewExpenseIcon}
            alt="new expense icon"
            onClick={handleNewExpense}
          />
        </div>
      )}

      {modal && <Modal setModal={setModal} animateModal={animateModal}/>}
    </>
  );
}

export default App;
