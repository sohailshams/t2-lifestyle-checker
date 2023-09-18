import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { messageToPatient } from "../utils/utils";
import { getPatient } from "../api/api";
import PatientInput from "./PatientInput";

function PatientInputForm() {
  const [patientInputData, setPatientInputData] = useState({
    nhs_number: "",
    surname: "",
    dob: "",
  });

  const [patientDbData, setPatientDbData] = useState("");
  const [correctNhsNumber, setCorrectNhsNumber] = useState(false);
  const [correctSurname, setCorrectSurname] = useState(false);
  const [correctDob, setCorrectDob] = useState(false);
  const [patientMessage, setPatientMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    // Check to wait until response came back after api call
    if (!isLoading) {
      const [istrue, message] = messageToPatient(
        patientInputData,
        patientDbData
      );
      // Check to navigate to /question page only if patient is successfully varified
      if (istrue) {
        navigate("/questions", { state: { age: patientDbData.age } });
      }
      setPatientMessage(message);
      setPatientInputData({
        nhs_number: "",
        surname: "",
        dob: "",
      });
    }
  }, [isLoading]);

  const handleChange = (e) => {
    // NHS number input field only accept numbers, updating initial state and bottom border color
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
    // surname input field only accept word, updating initial state and bottom border color
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
    // dob input field only accept jul 14 format, updating initial state and bottom border color
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
    // Validate the form fields
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
    // api call and updating initial state of patientDbData or patientMessage
    getPatient(parseInt(patientInputData.nhs_number))
      .then((patient) => {
        setIsLoading(false);
        return setPatientDbData(patient);
      })
      .catch((err) => setPatientMessage(err.response.data.msg));
    if (isLoading) {
      setPatientMessage("Please wait!");
    }
  };

  return (
    <div className="flex justify-center items-center h-[600px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 mt-10 border p-20 shadow-xl"
      >
        <PatientInput
          label="Enter NHS Number:"
          name="nhs_number"
          placeholder="NHS Number"
          value={patientInputData.nhs_number}
          handleChange={handleChange}
          correctPatientData={correctNhsNumber}
          requiredId="nhs-required"
          errorMessageId="nhs-message"
          errorMessage="Please enter numbers only!"
        />

        <PatientInput
          label="Patient's Surname:"
          name="surname"
          placeholder="shams"
          value={patientInputData.surname}
          handleChange={handleChange}
          correctPatientData={correctSurname}
          requiredId="surname-required"
          errorMessageId="surname"
          errorMessage="Please enter words only!"
        />

        <PatientInput
          label="Patient's DOB:"
          name="dob"
          placeholder="jul 01"
          value={patientInputData.dob}
          handleChange={handleChange}
          correctPatientData={correctDob}
          requiredId="dob-required"
          errorMessageId="dob"
          errorMessage="Please enter jul 01 DOB format!"
        />

        <input
          className="py-1 text-white bg-black w-[425px]"
          type="submit"
          value="Submit"
        />
        <h1 className="text-center text-red-900 font-bold">{patientMessage}</h1>
      </form>
    </div>
  );
}

export default PatientInputForm;
