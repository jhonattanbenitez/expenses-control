import { useState, useEffect } from 'react';

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filter shadow container">
      <form>
        <div className="field">
          <label htmlFor="expenses">Expenses filter</label>
          <select
            name="expenses"
            id="expenses"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">-- Categories Available --</option>
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
      </form>
    </div>
  );
};

export default Filters;
