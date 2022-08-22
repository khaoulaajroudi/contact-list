import {
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  ADD_CONTACT,
  DELETE_CONTACT,
} from "../constante/ContactType";
import axios from "axios";

export const getcontact = () => async (dispatch) => {
  dispatch({ type: GET_CONTACT });
  try {
    let result = await axios.get("/contact/all");
    console.log(result.data.result);
    dispatch({ type: GET_CONTACT_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.data });
    console.log(error);
  }
};

export const addcontact = (newContact) => async (dispatch) => {
  try {
    let result = axios.post("/contact/add", newContact);
    dispatch({ type: ADD_CONTACT, payload: "contact added" });
    dispatch(getcontact());
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.data });
    console.log(error);
  }
};

export const deletecontact = (id) => async (dispatch) => {
  try {
    let result = axios.delete(`/contact/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: "contact deleted" });
    dispatch(getcontact());
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.data });
    console.log(error);
  }
};
