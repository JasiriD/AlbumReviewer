//REST api connection code
//Importing axios library
import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/users"

//Makes REST api call
//Axios makes a get request to the default URL here, resulting in getAllUsers method
export const listUsers = () => axios.get(REST_API_BASE_URL);

//Axion makes a post request to default URL, putting the passed user object data into REST api/SQL Database
export const addUser = (user) => axios.post(REST_API_BASE_URL, user);