//REST api connection code
//Importing axios library
import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/reviews"

//Makes REST api call
//Axios makes a get request to the default URL here, resulting in getAllUsers method
export const listReviews = () => axios.get(REST_API_BASE_URL);

//Axios makes a post request to default URL, putting the passed review object data into REST api/SQL Database
export const addReview = (review) => axios.post(REST_API_BASE_URL, review);

//Axios makes a get request to the default URL + ID, resulting in getUserByID method
export const getReviewByID = (reviewid) => axios.get(REST_API_BASE_URL + '/' + reviewid);

//Axios makes a put request and updates the review at given id. reviewid and new review info are passed to updateUser
export const updateReview = (reviewid, review) => axios.put(REST_API_BASE_URL + '/' + reviewid, review);

export const deleteReview = (reviewid) => axios.delete(REST_API_BASE_URL+ '/' + reviewid);