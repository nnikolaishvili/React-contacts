import {
  SAVE_CONTACT,
  SEARCH_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT
} from "../types/contactTypes";

export const saveContact = newContact => {
  return {
    type: SAVE_CONTACT,
    payload: newContact
  };
};

export const searchContact = value => {
  return {
    type: SEARCH_CONTACT,
    payload: value
  };
};

export const editContact = newContact => {
  return {
    type: EDIT_CONTACT,
    payload: newContact
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
