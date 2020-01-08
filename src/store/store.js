import { createStore } from "redux";
import contactsReducer from "../reducers/contactReducer";

const store = createStore(contactsReducer);

export default store;
