import axios from "axios";

// Save spreadsheet
const saveSpreadsheet = async () => {
  await axios.post("http://localhost:5000/save", { data });
  alert("Spreadsheet saved!");
};

// Load spreadsheet
const loadSpreadsheet = async () => {
  const response = await axios.get("http://localhost:5000/load");
  setData(response.data.data || [["", "", ""]]);
};

return (
  <div>
    <div className="toolbar">
      <button onClick={saveSpreadsheet}>Save</button>
      <button onClick={loadSpreadsheet}>Load</button>
    </div>
    <HotTable data={data} /* Other props */ />
  </div>
);
