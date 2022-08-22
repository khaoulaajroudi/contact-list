import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  GET_CONTACT_FAIL,
  GET_CONTACT_SUCCESS,
} from "../constante/ContactType";

const initialState = {
  contactList: [],
  errors: null,
  status: "",
};
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT:
      return { ...state, status: "request send" };
    case GET_CONTACT_SUCCESS:
      return { ...state, status: "success", contactList: payload };
    case GET_CONTACT_FAIL:
      return { ...state, status: "fail", errors: payload };

    case ADD_CONTACT:
      return { ...state, status: payload };
    case DELETE_CONTACT:
      return { ...state, status: payload };

    default:
      return state;
  }
};
export default contactReducer;
