import React, { useState } from "react";
import RadioInput from "./RadioInput";
import { useLocation } from "react-router-dom";
import { pointsCheck } from "../utils/utils";

function Questions() {
  const [drink, setDrink] = useState("");
  const [smoke, setSmoke] = useState("");
  const [exercise, setExercise] = useState("");
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState("");

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (drink === "" || smoke === "" || exercise === "") {
      setIsError(true);
      return false;
    }
    const finalMessage = pointsCheck(
      location.state.age,
      drink,
      smoke,
      exercise
    );
    console.log("finalMessage", finalMessage);
    setResult(finalMessage);
  };

  return (
    <div className="flex justify-center flex-col items-center h-[600px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 mt-10 border p-20 shadow-xl"
      >
        <div>
          <label className="mr-3">
            Q1. Do you drink on more than 2 days a week?
          </label>
          <RadioInput
            label="Yes"
            value="yes"
            checked={drink}
            setter={setDrink}
          />
          <RadioInput label="No" value="no" checked={drink} setter={setDrink} />
        </div>
        <div className="my-3">
          <label className="mr-3">Q2. Do you smoke?</label>
          <RadioInput
            label="Yes"
            value="yes"
            checked={smoke}
            setter={setSmoke}
          />
          <RadioInput label="No" value="no" checked={smoke} setter={setSmoke} />
        </div>
        <div className="my-3">
          <label className="mr-3">
            Q3. Do you exercise more than 1 hour per week?
          </label>
          <RadioInput
            label="Yes"
            value="yes"
            checked={exercise}
            setter={setExercise}
          />
          <RadioInput
            label="No"
            value="no"
            checked={exercise}
            setter={setExercise}
          />
        </div>
        <div className="flex flex-col">
          {isError && (
            <span className="text-center my-1 text-red-900">
              *Please select an option!
            </span>
          )}
          <input
            className="py-1 text-white bg-black mx-auto w-[425px]"
            type="submit"
            value="Check Result"
          />
        </div>
      </form>
      <h1 className="mt-5 w-2/6 text-center py-3 px-5">{result}</h1>
    </div>
  );
}

export default Questions;
