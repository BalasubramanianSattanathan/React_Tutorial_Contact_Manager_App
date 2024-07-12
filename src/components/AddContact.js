import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phNumber: "",
    emailError: "",
    phoneError: "",
  };

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/; // Adjust based on your phone number format
    return phoneRegex.test(phoneNumber);
  };

  add = (e) => {
    e.preventDefault();
    const { name, email, phNumber } = this.state;
    let emailError = "";
    let phoneError = "";

    if (name === "") {
      alert("Name field is mandatory!");
      return;
    }
    if (!this.validateEmail(email)) {
      emailError = "Please enter a valid email address.";
    }
    if (!this.validatePhoneNumber(phNumber)) {
      phoneError = "Phone number must be 10 digits.";
    }

    if (emailError || phoneError) {
      this.setState({ emailError, phoneError });
      return;
    }

    this.props.addContactHandler({ name, email, phNumber });
    this.clear();
  };

  clear = (e) => {
    e?.preventDefault();
    this.setState({ name: "", email: "", phNumber: "", emailError: "", phoneError: "" });
  }

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value, emailError: "" })}
            />
            {this.state.emailError && <div className="ui red message">{this.state.emailError}</div>}
          </div>
          <div className="field">
            <label>Phone number</label>
            <input
              type="text"
              name="phNumber"
              placeholder="Phone number"
              value={this.state.phNumber}
              onChange={(e) => this.setState({ phNumber: e.target.value, phoneError: "" })}
            />
            {this.state.phoneError && <div className="ui red message">{this.state.phoneError}</div>}
          </div>
          <button className="ui button blue">Add</button>
          <button className="ui button" onClick={this.clear}>Clear</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
