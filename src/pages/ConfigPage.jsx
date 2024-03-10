import { useState } from "react";
import ConfigOption from "../components/ConfigOption";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

const ConfigPage = () => {
  const [countX, setCountX] = useState(2);
  const [countY, setCountY] = useState(2);

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
      <PageHeader link="/catalog" title="Add/edit window" />
      <Header />
      <div className="container flex min-h-[50vh]">
        <div className="border p-4 gap-4 border-gray-400 inline-grid m-auto bg-gray-300">
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
      </div>
      <div className="">
        <div className="addBtn-group-x fixed right-10 bottom-1/2">
          <button className="secondary mr-3" onClick={subtractLastColumn}>
            -
          </button>
          <button
            className="secondary add-btn"
            onClick={() => setCountX((countX) => countX + 1)}
          >
            +
          </button>
        </div>
        <div className="addBtn-group-y fixed right-1/2 bottom-10">
          <button className="secondary add-btn mr-3" onClick={subtractLastRow}>
            -
          </button>
          <button
            className="secondary add-btn y"
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
