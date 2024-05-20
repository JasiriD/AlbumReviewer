//REST api connection code
//Importing axios library
import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/users"

//Makes REST api call
export const listUsers = () => axios.get(REST_API_BASE_URL);