import React, { useState } from 'react';

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const result = (principal * rate * time) / 100;
    setInterest(result);
  };

  return (
    <div>
      <h2>Simple Interest Calculator</h2>
      <input type="number" placeholder="Principal" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      <input type="number" placeholder="Rate" value={rate} onChange={(e) => setRate(e.target.value)} />
      <input type="number" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={calculateInterest}>Calculate</button>
      {interest !== null && <h3>Simple Interest: ${interest}</h3>}
    </div>
  );
};

export default InterestCalculator;
