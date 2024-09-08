import axios from "axios";
const SERVER_URL = "https://server-jet-phi.vercel.app";
// const SERVER_URL = "https://server-yo5e.onrender.com";
// const SERVER_URL = "http://localhost:9000";

// @desc Get All Contacts
// @route GET http://localhost:9000/contacts
export const getAllContacts = () => {
  const url = `${SERVER_URL}/contacts`;
  return axios.get(url);
};

// @desc Get Contact With Contact ID
// @route GET http://localhost:9000/contacts/:contactId
export const getContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.get(url);
};

