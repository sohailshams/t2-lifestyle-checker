import { useEffect, useState } from "react";
import "./App.css";
import { getPatient } from "./api/api";
import PatientInput from "./components/PatientInput";
import Nav from "./components/Nav";

function App() {
  const [patientDbData, setPatientDbData] = useState({});
  useEffect(() => {
    getPatient(111222333)
      .then((patient) => setPatientDbData(patient))
      .catch((err) => console.log(err.response.data.msg));
  }, []);
  return (
    <>
      <Nav />
      <PatientInput patientDbData={patientDbData} />
    </>
  );
}

export default App;
