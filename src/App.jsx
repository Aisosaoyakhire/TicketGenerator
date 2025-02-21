import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import Step3 from "./Pages/Step3";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/Step2" element={<Step2 />} />
          <Route path="/Step3" element={<Step3 />} />
        </Routes>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
