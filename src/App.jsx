import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [countX, setCountX] = useState(1);
  const [countY, setCountY] = useState(1);

  return (
    <>
      <div className="grid-container">
        {Array(countY)
          .fill('')
          .map((y, j) => {
            return Array(countX)
              .fill('')
              .map((x, i) => (
                <div
                  className="grid-item"
                  style={{ gridColumnStart: i + 1, gridRowStart: j + 1 }}
                >{`${i + 1}, ${j + 1}`}</div>
              ));
          })}
      </div>
      <div className="card">
        <button
          className="add-btn x"
          onClick={() => setCountX((countX) => countX + 1)}
        >
          x = {countX}
        </button>
        <button
          className="add-btn y"
          onClick={() => setCountY((countY) => countY + 1)}
        >
          y = {countY}
        </button>
      </div>
    </>
  );
}

export default App;
