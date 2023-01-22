import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployeeForm from "./components/AddEmployee/AddEmployeeForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddEmployee" element={<AddEmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
