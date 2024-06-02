import React from 'react';
import './App.css';
import Chart from './Components/Chart';
import Controls from './Components/Controls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="balance">$1000.00</div>
        <div className="trading-interface">
          <div className="chart-container">
            <Chart />
          </div>
          <div className="right-section">
            <Controls />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
