import React from 'react';
import './Controls.css';

function Controls() {
  return (
    <div className="controls">
      <div className="amount">
        Amount:
        <input type="text" value="$500" readOnly />
      </div>
      <div className="profit">
        Profit:
        <span className="profit-value">91% +$455.91</span>
      </div>
      <div className="buttons">
        <button className="higher">Higher</button>
        <button className="lower">Lower</button>
      </div>
    </div>
  );
}

export default Controls;
