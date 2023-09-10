import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { messageToPatient } from "../utils/utils";

function PatientInput({ patientDbData }) {
  const [patientInputData, setPatientInputData] = useState({
    nhs_number: "",
    surname: "",
    dob: "",
  });
  const [correctNhsNumber, setCorrectNhsNumber] = useState(false);
  const [correctSurname, setCorrectSurname] = useState(false);
  const [correctDob, setCorrectDob] = useState(false);
  const [patientMessage, setPatientMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "nhs_number") {
      const nhsNumberEl = document.getElementById("nhs-message");
      const numbersOnly = /^[0-9\b]+$/;
      const nhsNumber = e.target.value;
      const isNhsNumber = /^[0-9\b]{9}$/.test(nhsNumber);
      if (
        e.target.value === "" ||
        numbersOnly.test(e.target.value) ||
        isNhsNumber
      ) {
        nhsNumberEl.classList.remove("visible");
        nhsNumberEl.classList.add("invisible");

        setCorrectNhsNumber(isNhsNumber);
        setPatientInputData({
          ...patientInputData,
          [e.target.name]: e.target.value,
        });
      } else {
        nhsNumberEl.classList.remove("invisible");
        nhsNumberEl.classList.add("visible");
      }
    }
    if (e.target.name === "surname") {
      const surnameEl = document.getElementById("surname");
      const words = e.target.value;
      const wordsOnly = /^[a-zA-Z]+$/;
      const isWords = wordsOnly.test(words);
      if (e.target.value === "" || isWords) {
        surnameEl.classList.remove("visible");
        surnameEl.classList.add("invisible");

        setCorrectSurname(isWords);
        setPatientInputData({
          ...patientInputData,
          [e.target.name]: e.target.value,
        });
      } else {
        surnameEl.classList.remove("invisible");
        surnameEl.classList.add("visible");
      }
    }
    if (e.target.name === "dob") {
      const dobEl = document.getElementById("dob");
      const dob = e.target.value;
      const wordsNumberOnly = /^([a-z])\w{2} \d{2}$/;
      const isWordsNumberOnly = wordsNumberOnly.test(dob);
      setPatientInputData({
        ...patientInputData,
        [e.target.name]: e.target.value,
      });
      if (e.target.value === "" || isWordsNumberOnly) {
        dobEl.classList.remove("visible");
        dobEl.classList.add("invisible");

        setCorrectDob(isWordsNumberOnly);
      } else {
        dobEl.classList.remove("invisible");
        dobEl.classList.add("visible");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nhsRequiredEl = document.getElementById("nhs-required");
    const surnameEl = document.getElementById("surname-required");
    const dobEl = document.getElementById("dob-required");
    if (patientInputData.nhs_number === "" || patientInputData.nhs_number < 9) {
      nhsRequiredEl.classList.remove("invisible");
      nhsRequiredEl.classList.add("visible");
    } else {
      nhsRequiredEl.classList.remove("visible");
      nhsRequiredEl.classList.add("invisible");
    }
    if (patientInputData.surname === "") {
      surnameEl.classList.remove("invisible");
      surnameEl.classList.add("visible");
    } else {
      surnameEl.classList.remove("visible");
      surnameEl.classList.add("invisible");
    }
    if (patientInputData.dob === "") {
      dobEl.classList.remove("invisible");
      dobEl.classList.add("visible");
    } else {
      dobEl.classList.remove("visible");
      dobEl.classList.add("invisible");
    }

    const [istrue, message] = messageToPatient(patientInputData, patientDbData);
    if (istrue) {
      navigate("/questions");
    }
    setPatientMessage(message);
    setPatientInputData({
      nhs_number: "",
      surname: "",
      dob: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-[600px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 mt-10 border p-20 shadow-xl"
      >
        <label className="flex justify-center">
          <span className="w-[145px]">Enter NHS Number:</span>
          <div>
            <input
              className={
                correctNhsNumber
                  ? "border-green-900 border-b-[1px] pl-3 ml-3 py-1 bg-slate-200 outline-none"
                  : "border-red-900 border-b-[1px] pl-3 ml-3 py-1 bg-slate-200 outline-none"
              }
              type="text"
              name="nhs_number"
              placeholder="NHS Number"
              value={patientInputData.nhs_number}
              onChange={handleChange}
            />
            <span id="nhs-required" className="text-red-900 pl-1 invisible">
              *Required
            </span>
            <p id="nhs-message" className="invisible text-red-900 pl-3 pt-1">
              Please enter numbers only!
            </p>
          </div>
        </label>
        <label className="flex justify-center">
          <span className="w-[150px]">Patient's Surname:</span>
          <div>
            <input
              className={
                correctSurname
                  ? "border-green-900 border-b-[1px] pl-3 ml-3 py-1 bg-slate-200 outline-none"
                  : "border-red-900 border-b-[1px] pl-3 ml-3 py-1 bg-slate-200 outline-none"
              }
              type="text"
              name="surname"
              placeholder="shams"
              value={patientInputData.surname}
              onChange={handleChange}
            />
            <span id="surname-required" className="text-red-900 pl-1 invisible">
              *Required
            </span>
            <p id="surname" className="invisible text-red-900 pl-3 pt-1">
              Please enter words only!
            </p>
          </div>
        </label>
        <label className="flex justify-center">
          <span className="w-[150px]">Patient's DOB:</span>
          <div>
            <input
              className={
                correctDob
                  ? "border-green-900 border-b-[1px] pl-3 ml-3 py-1 bg-slate-200 outline-none"
                  : "border-red-900 border-b-[1px] pl-3 ml-3 py-1 bg-slate-200 outline-none"
              }
              type="text"
              name="dob"
              placeholder="jul 01"
              value={patientInputData.dob}
              onChange={handleChange}
            />
            <span id="dob-required" className="text-red-900 pl-1 invisible">
              *Required
            </span>
            <p id="dob" className="invisible text-red-900 pl-3 pt-1">
              Please enter jul 01 DOB format!
            </p>
          </div>
        </label>
        <input
          className="py-1 text-white bg-black mx-auto w-[425px]"
          type="submit"
          value="Submit"
        />
        <h1 className="text-center text-red-900 font-bold">{patientMessage}</h1>
      </form>
    </div>
  );
}

export default PatientInput;
