import { useState } from "react";
import logo from "./logo.png";
import { CSVLink } from "react-csv";

import "./App.css";

function App() {
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [csvData, setCSVData] = useState([
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ]);
  const changeHandler1 = (event) => {
    setSelectedFile1(event.target.files[0]);
  };
  const changeHandler2 = (event) => {
    setSelectedFile2(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File1", selectedFile1);
    formData.append("File2", selectedFile2);

    fetch("API KEY HERE", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setCSVData(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Upload your files here</p>
        <input type="file" className="input" onChange={() => changeHandler1} />
        <input type="file" className="input" onChange={() => changeHandler2} />
        <CSVLink data={csvData} className="button">
          Download File
        </CSVLink>
      </header>
    </div>
  );
}

export default App;
