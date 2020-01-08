import {
  SAVE_CONTACT,
  SEARCH_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT
} from "../types/contactTypes";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Zaza Beridze",
      phone: "111111111",
      email: "zaza@gmail.com"
    },
    {
      id: 2,
      name: "Eka maisuradze",
      phone: "222222222",
      email: "eka@gmail.com"
    },
    {
      id: 3,
      name: "Nino Baratashvili",
      phone: "333333333",
      email: "nino@gmail.com"
    }
  ]
};

const contactsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let contactsData = JSON.parse(localStorage.getItem("contacts"));
  switch (type) {
    case SAVE_CONTACT:
      let ids = contactsData.map(x => x.id);
      let id = ids.length === 0 ? 1 : Number(ids[ids.length - 1]) + 1;
      let item = { ...payload, id };
      contactsData.push(item);
      localStorage.setItem("contacts", JSON.stringify(contactsData));
      return {
        contacts: contactsData
      };
    case SEARCH_CONTACT:
      const contacts = contactsData.filter(x =>
        x.name.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        contacts
      };
    case EDIT_CONTACT:
      let editIndex = contactsData.findIndex(
        contact => contact.id === payload.id
      );
      contactsData[editIndex] = payload;
      localStorage.setItem("contacts", JSON.stringify(contactsData));
      return {
        contacts: contactsData
      };

    case DELETE_CONTACT:
      let deleteIndex = contactsData.findIndex(x => x.id === payload);
      contactsData.splice(deleteIndex, 1);
      localStorage.setItem("contacts", JSON.stringify(contactsData));
      return {
        contacts: contactsData
      };
    default:
      if (!contactsData) {
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
      } else {
        state.contacts = contactsData;
      }
      return state;
  }
};

export default contactsReducer;
