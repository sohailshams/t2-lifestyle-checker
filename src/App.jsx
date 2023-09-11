import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getPatient } from "./api/api";
import PatientInput from "./components/PatientInput";
import Nav from "./components/Nav";
import Questions from "./components/Questions";

function App() {
  // const [patientDbData, setPatientDbData] = useState({});
  // useEffect(() => {
  //   getPatient(111222333)
  //     .then((patient) => setPatientDbData(patient))
  //     .catch((err) => console.log(err.response.data.msg));
  // }, []);
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
