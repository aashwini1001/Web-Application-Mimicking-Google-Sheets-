import React, { useState } from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.min.css";

const App = () => {
  const [data, setData] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);

  // Apply formatting
  const formatCell = (row, col, type) => {
    const hot = document.querySelector(".hot").handsontable.getInstance();
    const cellMeta = hot.getCellMeta(row, col);
    cellMeta.className = type; // Add a CSS class for styling (bold, italic, etc.)
    hot.render();
  };

  const addRow = () => setData((prev) => [...prev, ["", "", ""]]);
  const addColumn = () => setData((prev) => prev.map((row) => [...row, ""]));

  return (
    <div>
      <h1>Spreadsheet Mimic</h1>
      <div className="toolbar">
        <button onClick={() => formatCell(0, 0, "bold")}>Bold</button>
        <button onClick={addRow}>Add Row</button>
        <button onClick={addColumn}>Add Column</button>
      </div>
      <HotTable
        data={data}
        colHeaders={true}
        rowHeaders={true}
        licenseKey="non-commercial-and-evaluation"
        formulas={true}
        dropdownMenu={true}
      />
    </div>
  );
};

export default App;
