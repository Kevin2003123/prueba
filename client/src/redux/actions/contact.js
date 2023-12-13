import { GET_CONTACTS, INSERT_CONTACT, UPDATE_CONTACTS, DELETE_CONTACT, GET_CONTACT_BY_ID } from "./action-type"
import axios from "../../axios"

export const getContacts = (page) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/contact/all?page=${page}`);
        return dispatch({
          type: GET_CONTACTS,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };


  export const getContactById = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/contact/${id}`);
        return dispatch({
          type: GET_CONTACT_BY_ID,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  export const insertContact = (name, lastName, phone, address) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.post("/contact/create", {name, lastName, phone, address});
        return dispatch({
          type: INSERT_CONTACT,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  export const updateContact = (id, name, lastName, phone, address) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.put("/contact/update", {id, name, lastName, phone, address});
        return dispatch({
          type: UPDATE_CONTACTS,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  export const deleteContact = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.delete(`/contact/delete/${id}`);
        return dispatch({
          type: DELETE_CONTACT,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };