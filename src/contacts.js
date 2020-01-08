import React, { Component } from "react";
import Contact from "./contact";

class Contacts extends Component {
  render() {
    const { data, onHandleClick } = this.props;
    return (
      <div className="list-group">
        {data &&
          data.map(contact => {
            return (
              <Contact
                key={contact.id} //Added This
                contact={contact}
                onContactClick={onHandleClick}
              />
            );
          })}
      </div>
    );
  }
}
export default Contacts;
