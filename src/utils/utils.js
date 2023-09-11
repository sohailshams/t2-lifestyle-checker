export function messageToPatient(patientInputData, patientDbData) {
  const { nhs_number, surname, dob } = patientInputData;
  const dbPatientSize = Object.keys(patientDbData).length;
  if (dbPatientSize === 0) {
    return [false, "Your details could not be found"];
  }
  if (parseInt(nhs_number) === patientDbData.nhs_number) {
    if (
      surname.toLowerCase() === patientDbData.surname_name.toLowerCase() &&
      dob.toLowerCase() === patientDbData.dob.toLowerCase() &&
      patientDbData.age < 16
    ) {
      return [false, "You are not eligble for this service"];
    }
    if (
      surname.toLowerCase() === patientDbData.surname_name.toLowerCase() &&
      dob.toLowerCase() === patientDbData.dob.toLowerCase() &&
      patientDbData.age > 16
    ) {
      return [true, "You found - go to part two"];
    } else {
      return [false, "Your details could not be found"];
    }
  } else {
    return [false, "Your details could not be found"];
  }
}

export function pointsCheck(age, drink, smoke, exercise) {
  let total = 0;

  if (drink === "yes" && age >= 16 && age <= 21) {
    total += 1;
  } else if (drink === "yes" && age >= 22 && age <= 40) {
    total += 2;
  } else if (drink === "yes" && age >= 41 && age <= 65) {
    total += 3;
  } else if (drink === "yes" && age >= 64) {
    total += 3;
  }

  if (smoke === "yes" && age >= 16 && age <= 21) {
    total += 2;
  } else if (smoke === "yes" && age >= 22 && age <= 40) {
    total += 2;
  } else if (smoke === "yes" && age >= 41 && age <= 65) {
    total += 2;
  } else if (smoke === "yes" && age >= 64) {
    total += 3;
  }
  if (exercise === "no" && age >= 16 && age <= 21) {
    total += 1;
  } else if (exercise === "no" && age >= 22 && age <= 40) {
    total += 3;
  } else if (exercise === "no" && age >= 41 && age <= 65) {
    total += 2;
  } else if (exercise === "no" && age >= 64) {
    total += 1;
  }

  if (total <= 3) {
    return "Thank you for answering our questions, we don't need to see you at this time. Keep up the good work!";
  } else {
    return "We think there are some simple things you could do to improve you quality of life, please phone to book an appointment";
  }
}
