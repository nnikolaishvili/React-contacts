import React, { Component } from "react";
import NewContact from "./new-contact";
import Search from "./search";
import Contacts from "./contacts";
import { connect } from "react-redux";
import {
  editContact,
  deleteContact,
  saveContact,
  searchContact
} from "./actions/contactActions";

class App extends Component {
  state = {
    showContactForm: false,
    contact: {},
    editMode: false,
    searchValue: ""
  };

  handleSearch = event => {
    this.props.searchContact(event.target.value);
    this.setState({ searchValue: event.target.value });
  };

  handleClick = id => {
    const contact = [...this.props.contacts].find(x => x.id === id);
    this.setState({ contact, showContactForm: true, editMode: true });
  };

  handleSave = newContact => {
    if (this.state.editMode) {
      this.props.editContact(newContact);
      alert('edited succesfully, go back')
    } else {
      this.props.saveContact(newContact);
      alert('saved succesfully')
    }
  };

  newFormShow = () => {
    this.setState({ showContactForm: true, editMode: false });
  };

  handleGoBack = () => {
    this.setState({ showContactForm: false });
  };

  handleRemove = id => {
    if (window.confirm("Remove this contact?")) {
      this.props.deleteContact(id);
      this.setState({
        searchValue: "",
        showContactForm: false
      });
    }
  };

  render() {
    return (
      <div className="container">
        {this.state.showContactForm ? (
          <NewContact
            onSaveContact={this.handleSave}
            onRemove={this.handleRemove}
            goBack={this.handleGoBack}
            contact={this.state.contact}
            editMode={this.state.editMode}
          />
        ) : (
          <div>
            <h1>Contacts App</h1>
            <hr />
            <button className="btn btn-danger" onClick={this.newFormShow}>
              New contact
            </button>
            <hr />
            <Search
              onSearch={this.handleSearch}
              value={this.state.searchValue}
            />
            <Contacts
              data={this.props.contacts}
              onHandleClick={this.handleClick}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchContact: value => dispatch(searchContact(value)),
    deleteContact: contactId => dispatch(deleteContact(contactId)),
    saveContact: data => dispatch(saveContact(data)),
    editContact: data => dispatch(editContact(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
