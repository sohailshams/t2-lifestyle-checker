import { useState } from "react";

function PatientInput() {
  const [patientInputData, setPatientInputData] = useState({
    nhs_number: "",
    surname: "",
    dob: "",
  });
  console.log("patientInputData", patientInputData);
  const handleChange = (e) => {
    setPatientInputData({
      ...patientInputData,
      [e.target.name]: e.target.value,
    });
    // setPatientInputData({ nhs_number: e.target.value });
  };
  // const handleSurname = (e) => {
  //   setPatientInputData({ nhs_number: e.target.value });
  // };
  // const handleDob = (e) => {
  //   setPatientInputData({ nhs_number: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "A name was submitted: " +
        patientInputData.nhs_number +
        patientInputData.surname +
        patientInputData.dob
    );
  };

  return (
    <div className="flex justify-center items-center h-[600px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-10 mt-10 border p-20 shadow-xl"
      >
        <label className="flex justify-center">
          <span className="w-[145px]">Enter NHS Number:</span>
          <input
            className="pl-3 ml-3 py-1 bg-slate-100"
            type="text"
            name="nhs_number"
            placeholder="NHS Number"
            value={patientInputData.nhs_number}
            onChange={handleChange}
          />
        </label>
        <label className="flex justify-center">
          <span className="w-[150px]">Patient's Surname:</span>
          <input
            className="pl-3 ml-3 py-1 bg-slate-100"
            type="text"
            name="surname"
            placeholder="Shams"
            value={patientInputData.surname}
            onChange={handleChange}
          />
        </label>
        <label className="flex justify-center">
          <span className="w-[150px]">Patient's DOB:</span>
          <input
            className="pl-3 ml-3 py-1 bg-slate-100"
            type="text"
            name="dob"
            placeholder="Nov 25"
            value={patientInputData.dob}
            onChange={handleChange}
          />
        </label>
        <input
          className="py-1 text-white bg-black mx-auto w-[425px]"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default PatientInput;
