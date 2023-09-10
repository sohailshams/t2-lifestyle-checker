import { useEffect } from "react";
import "./App.css";
import { getPatient } from "./api/api";
import PatientInput from "./components/PatientInput";
import Nav from "./components/Nav";

function App() {
  useEffect(() => {
    getPatient(111222333)
      .then((patient) => console.log(patient))
      .catch((err) => console.log(err.response.data.msg));
  }, []);
  return (
    <>
      <Nav />
      <PatientInput />
    </>
  );
}

export default App;
