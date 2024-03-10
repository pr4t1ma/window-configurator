import { useState } from "react";
import ConfigOption from "../components/ConfigOption";
import Header from "../components/Header";

const ConfigPage = () => {
  const [countX, setCountX] = useState(1);
  const [countY, setCountY] = useState(1);

  const subtractLastRow = () => {
    // Check if the current value of countY is greater than 1
    if (countY > 1) {
      // If countY is greater than 1, decrement countY by 1 and update the state
      setCountY((prevCountY) => prevCountY - 1);
    }
  };

  const subtractLastColumn = () => {
    if (countX > 1) {
      setCountX((prevCountX) => prevCountX - 1);
    }
  };
  return (
    <div>
      <Header />
      <div className="grid-container border-3">
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
          <button className=" primary mr-3 " onClick={subtractLastColumn}>
            -
          </button>
          <button
            className=" primary add-btn "
            onClick={() => setCountX((countX) => countX + 1)}
          >
            +
          </button>
        </div>
        <div className="addBtn-group-y  fixed right-1/2 bottom-10">
          <button className="primary add-btn mr-3" onClick={subtractLastRow}>
            -
          </button>
          <button
            className="primary add-btn y"
            onClick={() => setCountY((countY) => countY + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigPage;
