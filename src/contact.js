import React from "react";

const Contact = props => {
  const {
    contact: { id, name, phone, email },
    onContactClick
  } = props;
  return (
    <ul
      className="list-group-item"
      style={{ marginBottom: "20px", listStyle: "none" }}
      onClick={() => onContactClick(id)}
    >
      <li>Id:{id}</li>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Email: {email}</li>
    </ul>
  );
};

export default Contact;
