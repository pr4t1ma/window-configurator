import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ConfigOption from "./ConfigOption";
import Searchsection from "./Serchsection";
import TableHeader from "./TableHeader";

function App() {
  const [countX, setCountX] = useState(1);
  const [countY, setCountY] = useState(1);

  const subtractLastRow = () => {
    if (countY > 1) {
      setCountY((prevCountY) => prevCountY - 1);
    }
  };

  const subtractLastColumn = () => {
    if (countX > 1) {
      setCountX((prevCountX) => prevCountX - 1);
    }
  };

  return (
    <div className=" wrapper bg-slate-50 h-screen b">
      <div className="container">
        <Header />
        <Searchsection />
        <TableHeader />
        <div className="grid-container border-3 border-blue-400">
          {Array(countY)
            .fill("")
            .map((y, j) => {
              return Array(countX)
                .fill("")
                .map((x, i) => (
                  <div
                    key={i}
                    className="grid-item"
                    style={{ gridColumnStart: i + 1, gridRowStart: j + 1 }}
                  >
                    {`${i + 1}, ${j + 1}`}
                    <ConfigOption />
                  </div>
                ));
            })}
        </div>
        <div className="">
          <div className="addBtn-group-x fixed right-10 bottom-1/2">
            <button className="mr-3 " onClick={subtractLastColumn}>
              -
            </button>
            <button
              className="add-btn "
              onClick={() => setCountX((countX) => countX + 1)}
            >
              +
            </button>
          </div>
          <div className="addBtn-group-y  fixed right-1/2 bottom-10">
            <button className="add-btn mr-3" onClick={subtractLastRow}>
              -
            </button>
            <button
              className="add-btn y"
              onClick={() => setCountY((countY) => countY + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
