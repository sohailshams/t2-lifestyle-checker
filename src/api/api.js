import axios from "axios";

const t2LifeStyleApi = axios.create({
  baseURL: "https://t2-lifestyle.onrender.com/api",
});

export function getPatient(nhs_number) {
  return t2LifeStyleApi
    .get(`/patients/${nhs_number}`)
    .then((res) => res.data.patient);
}
