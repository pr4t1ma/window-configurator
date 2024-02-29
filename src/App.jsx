import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./App.css";

function App() {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);
  const [windows, setWindows] = useState([]);

  const addWindow = () => {
    const posR = prompt("which row?");
    const posC = prompt("which col?");
    const w = prompt("width?");
    const h = prompt("height?");
    const o = confirm("openable?");

    setWindows([
      ...windows,
      {
        width: parseInt(w),
        height: parseInt(h),
        openable: o,
        position: {
          row: parseInt(posR),
          col: parseInt(posC),
        },
      },
    ]);
  };
  // const windows = [
  //   {
  //     width: 100,
  //     height: 100,
  //     openable: true,
  //     position: {
  //       row: 1,
  //       col: 1,
  //     },
  //   },
  //   {
  //     width: 100,
  //     height: 100,
  //     openable: true,
  //     position: {
  //       row: 1,
  //       col: 2,
  //     },
  //   },
  //   {
  //     width: 100,
  //     height: 200,
  //     openable: false,
  //     position: {
  //       row: 2,
  //       col: 1,
  //     },
  //   },
  //   {
  //     width: 100,
  //     height: 200,
  //     openable: false,
  //     position: {
  //       row: 2,
  //       col: 2,
  //     },
  //   },
  // ];

  return (
    <>
      <main>
        <div className="sidebar">
          <h2>Window Configurator</h2>
          <form action="">
            <div className="field">
              <label htmlFor="">
                Rows{" "}
                <input
                  type="number"
                  value={rows}
                  onChange={(e) => setRows(e.target.value)}
                />
              </label>
            </div>
            <div className="field">
              <label htmlFor="">
                Cols{" "}
                <input
                  type="number"
                  value={cols}
                  onChange={(e) => setCols(e.target.value)}
                />
              </label>
            </div>
          </form>
          <div className="field">
            <button onClick={addWindow}>Add a new window</button>
          </div>
        </div>
        <div className="grid-container">
          {windows.map((window, i) => (
            <div
              key={i}
              className="grid-item"
              style={{
                width: window.width,
                height: window.height,
                gridColumnStart: window.position.col,
                gridRowStart: window.position.row,
                background: window.openable ? "#f7fff7" : "#fffff7",
              }}
            >
              <p>{window.openable ? "Openable" : "Fixed"}</p>
              <p>
                {window.width}cm x {window.height}cm
              </p>
            </div>
          ))}
        </div>
      </main>

      <div className="data">
        <SyntaxHighlighter language="javascript" style={docco}>
          {JSON.stringify(
            {
              rows,
              cols,
              windows,
            },
            null,
            2
          )}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default App;
