// In this UserForm class component we can add and edit the user details.
import React, { Component } from "react";
import "./UserForm.css";

class UserForm extends Component {
  state = {
    firstName: this.props.user ? this.props.user.firstName : "",
    lastName: this.props.user ? this.props.user.lastName : "",
    email: this.props.user ? this.props.user.email : "",
    department: this.props.user?.company?.name || "", 
  };
  
  handleChange = (event) => {
    const { name, value } = event.target; 
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, department } = this.state;
    const updatedUser = {...this.props.user, name: `${firstName} ${lastName}`, email, company: { name: department }, };
    this.props.onSubmit(updatedUser);
  };  

  render() {
    const { firstName, lastName, email, department } = this.state;
    const { onCancel } = this.props; 
    return (
      <div className="form-container">
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h2>{this.props.user ? "Edit User" : "Add User"}</h2> 
          <label>First Name: <input type="text" name="firstName" value={firstName} onChange={this.handleChange} required /></label>
          <label>Last Name:<input type="text" name="lastName"  value={lastName} onChange={this.handleChange} required /></label>
          <label>Email:<input type="email" name="email" value={email} onChange={this.handleChange} required /></label>
          <label>Department: <input type="text" name="department" value={department}  onChange={this.handleChange} required /></label>
          <div className="buttons-container">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
