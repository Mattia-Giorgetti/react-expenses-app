
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };
  const stopFormHandler = () => {
    setShowForm(false);
  };


  return (
  
    <div className='new-expense'>
    {!showForm &&  <button type='button' onClick={showFormHandler}>Add New Expense</button>}
    {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopFormHandler}/>}  
    </div>
  );
};

export default NewExpense;