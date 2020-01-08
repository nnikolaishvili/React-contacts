import React, { Component } from "react";

class NewContact extends Component {
  state = {
    id: 0,
    name: "",
    phone: "",
    email: "",
    errors: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ errors: [], [name]: value });
  };

  validate = () => {
    let errors = [];
    let phoneReg = /^[0-9]*$/g;
    if(this.state.name === ""){
      errors.push("name field is required");
    }
    if(this.state.phone === ""){
      errors.push("phone field is required");
    }
    if(this.state.email === ""){
      errors.push("email field is required");
    }
    if (this.state.email && !this.state.email.includes("@")) {
      errors.push("mail does not have correct format");
    }
    if (!this.state.phone.match(phoneReg)) {
      errors.push("phone must contain only numbers");
    }

    this.setState({ errors });
    return errors.length === 0;
  };

  saveContact = event => {
    event.preventDefault();
    let valid = this.validate();
    if (valid) {
      this.props.onSaveContact({
        id: this.state.id,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email
      });
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.editMode && nextProps.contact.id !== prevState.id) {
      return nextProps.contact;
    }
    return false;
  }

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <hr />
        <button className="btn btn-danger" onClick={this.props.goBack}>
          Go Back
        </button>
        <hr />
        <form onSubmit={this.saveContact}>
          <div className="form-group mb-2 bg-danger text-white">
            <ul>
              {this.state.errors.map(error => (
                <li>{error}</li>
              ))}
            </ul>
          </div>

          <div className="form-group">
            <label htmlFor="contact-name">name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="contact-name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-phone">phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              id="contact-phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="contact-email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            onClick={() => this.props.onRemove(this.state.id)}
            className="btn btn-danger float-right"
          >
            delete
          </button>
        </form>
      </div>
    );
  }
}

export default NewContact;
