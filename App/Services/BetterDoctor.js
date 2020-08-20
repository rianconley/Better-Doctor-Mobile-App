import axios from "axios";
import {Config} from "../Config/Config";

const userApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.DOC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 3000,

});

const Api = async (url,params = {}) => {
  const userKey = {user_key:Config.DOC_API_KEY};
  const paramsCom = {...params,...userKey};
  const response = await userApiClient.get(url,{params:paramsCom});
  if (response.status === 200) {
    return response.data;
  }
  return null;
};

const fetchDoctors = (params) => {
 return Api("/doctors",params);
};
const fetchDoctorsProfile = (params) => {
  return Api(`/doctors/npi/${params}`);
 };
const fetchSpecialties = () => {
  return Api("/specialties");
};
const fetchPractices = () => {
  return Api("/practices");
};

const fetchInsurances = () => {
  return Api("/insurances");
};
const DoctorService = {
  fetchDoctors,
  fetchSpecialties,
  fetchInsurances,
  fetchPractices,
  fetchDoctorsProfile
};

export default DoctorService;
