export function messageToPatient(patientInputData, patientDbData) {
  const { nhs_number, surname, dob } = patientInputData;
  const dbPatientSize = Object.keys(patientDbData).length;
  if (dbPatientSize === 0) {
    return "Your details could not be found";
  }
  if (parseInt(nhs_number) === patientDbData.nhs_number) {
    if (
      surname.toLowerCase() === patientDbData.surname_name.toLowerCase() &&
      dob.toLowerCase() === patientDbData.dob.toLowerCase() &&
      patientDbData.age < 16
    ) {
      return "You are not eligble for this service";
    }
    if (
      surname.toLowerCase() === patientDbData.surname_name.toLowerCase() &&
      dob.toLowerCase() === patientDbData.dob.toLowerCase() &&
      patientDbData.age > 16
    ) {
      return "You found - go to part two";
    } else {
      return "Your details could not be found";
    }
  }
}
