import React, { useState } from 'react';

const BudgetingGame = () => {
  const [income] = useState(100);  // Total budget
  const [savings, setSavings] = useState(0);
  const [spending, setSpending] = useState(0);
  const [investing, setInvesting] = useState(0);

  const handleSubmit = () => {
    const total = savings + spending + investing;
    if (total > income) {
      alert("You've exceeded your budget!");
    } else {
      alert(`Budget set! Savings: $${savings}, Spending: $${spending}, Investing: $${investing}`);
    }
  };

  return (
    <div>
      <h2>Budgeting Game</h2>
      <p>Total income: ${income}</p>
      <label>Savings:</label>
      <input type="number" value={savings} onChange={(e) => setSavings(Number(e.target.value))} />
      <label>Spending:</label>
      <input type="number" value={spending} onChange={(e) => setSpending(Number(e.target.value))} />
      <label>Investing:</label>
      <input type="number" value={investing} onChange={(e) => setInvesting(Number(e.target.value))} />
      <button onClick={handleSubmit}>Submit Budget</button>
    </div>
  );
};

export default BudgetingGame;
