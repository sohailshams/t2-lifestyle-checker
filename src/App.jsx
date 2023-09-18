import { Routes, Route } from "react-router-dom";
import "./App.css";
import PatientInputForm from "./components/PatientInputForm";
import Nav from "./components/Nav";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<PatientInputForm />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
