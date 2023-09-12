import { Routes, Route } from "react-router-dom";
import "./App.css";
import PatientInput from "./components/PatientInput";
import Nav from "./components/Nav";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<PatientInput />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
