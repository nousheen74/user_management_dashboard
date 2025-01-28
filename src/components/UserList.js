// In this UserList Class Component we can have all the users fetched from the API call and can also perform the add, edit and delete features.
import React, { Component } from "react";
import UserForm from "./UserForm";
import "./UserList.css";

class UserList extends Component {
  state = {
    users: [],
    currentUser: null, 
    isEditing: false, 
    error: null,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  handleAddUser = () => {
    this.setState({ currentUser: null, isEditing: true });
  };

  handleEditUser = (user) => {
    this.setState({ currentUser: { ...user }, isEditing: true });
  };

  handleDeleteUser = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        this.setState((prevState) => ({
          users: prevState.users.filter((user) => user.id !== userId),
        }));
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  handleFormSubmit = (user) => {
    if (user.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update user");
          }
          return response.json();
        })
        .then((updatedUser) => {
          this.setState((prevState) => ({
            users: prevState.users.map((u) =>
              u.id === updatedUser.id ? updatedUser : u
            ),
            currentUser: null,
            isEditing: false,
          }));
        })
        .catch((error) => {
          this.setState({ error: error.message });
        });
    } else {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add user");
          }
          return response.json();
        })
        .then((newUser) => {
          this.setState((prevState) => ({
            users: [...prevState.users, { ...user, id: newUser.id }],
            currentUser: null,
            isEditing: false,
          }));
        })
        .catch((error) => {
          this.setState({ error: error.message });
        });
    }
  };

  handleFormCancel = () => {
    this.setState({ currentUser: null, isEditing: false }); //Here we are showing the userList table on cancel button.
  };

  render() {
    const { users, currentUser, isEditing, error } = this.state;
    return (
      <div className="user-list-container">
        <h1>User Management Dashboard</h1>
        {error && <div className="error">Error: {error}</div>}
        {isEditing ? (<UserForm user={currentUser} onSubmit={this.handleFormSubmit} onCancel={this.handleFormCancel}/>) : 
        (<>
          <button className="add-btn" onClick={this.handleAddUser}>Add User</button> 
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  const nameParts = user.name.split(" "); //Splitting the name as first and last name.
                  const firstName = nameParts[0];
                  const lastName = nameParts[1] || "";
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.company?.name || "N/A"}</td> 
                      <td>
                        <button className="edit-btn" onClick={() => this.handleEditUser(user)}>Edit</button>
                        <button className="delete-btn" onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
                      </td>
                    </tr>
                  );})}
              </tbody>
            </table>
          </>
        )}
      </div>
    );}}

export default UserList;
