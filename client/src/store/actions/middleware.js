import { addUser, removeUser } from "./types";
import axios from "axios"

export const fetchUserData = () => async (dispatch) => {
  try {
    const res = await axios.get("/getUser"); //async call to rest api
    dispatch(addUser({userData: res.data}));
  } catch (error) {
    console.log(error)
  }
};
