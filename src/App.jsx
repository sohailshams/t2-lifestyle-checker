import { useEffect } from "react";
import "./App.css";
import { getPatient } from "./assets/api/api";

function App() {
  useEffect(() => {
    getPatient(111222333)
      .then((patient) => console.log(patient))
      .catch((err) => console.log(err.response.data.msg));
  }, []);
  return (
    <>
      <p className="underline text-red-500">T2 LifeStyle</p>
    </>
  );
}

export default App;
