# User Management Dashboard

A simple and responsive web application for managing user details, including viewing, adding, editing, and deleting user information. The app interacts with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for backend data simulation.

---

## Features

- **View Users**: Fetch and display a list of users with details such as ID, First Name, Last Name, Email, and Department.
- **Add Users**: Submit a form to add new users. The API simulates a successful response.
- **Edit Users**: Update existing user details via a pre-filled form.
- **Delete Users**: Remove users from the list with a delete request.
- **Error Handling**: Display error messages for failed API interactions.
- **Client-Side Validation**: Validate form inputs for email format and required fields.
- **Responsive UI**: Designed to be mobile-friendly.

---

## Technologies Used

- **Frontend**: React.js (Class Components) and CSS
- **API**: JSONPlaceholder
- **State Management**: `this.state` in class components
- **HTTP Requests**: Fetch API

---

## Project Setup Instructions

1. Clone the repository:
   git clone https://github.com/yourusername/your-repo-name.git

2. Navigate to the project directory:
   cd umd_assignment/my_app

3. Install dependencies:
  npm install

4. Open your browser and visit:
  http://localhost:3000
  
---

### API Endpoints Used
* Fetch Users: GET /users
* Add User: POST /users
* Edit User: PUT /users/:id
* Delete User: DELETE /users/:id

---

### How to Use
1. Viewing Users: The homepage displays a list of users fetched from the /users endpoint.
2. Adding a User: Click the "Add User" button.Fill in the form and submit.
3. Editing a User: Click the "Edit" button next to a user. Update details in the pre-filled form and save.
4. Deleting a User: Click the "Delete" button next to a user to remove them.

---

### Directory Structure and Components Explanation

src/
├── components/
│   ├── UserList.js       # Displays the list of users with options to add, edit, and delete.
│   ├── UserList.css      # Styling specific to the UserList component.
│   ├── UserForm.js       # A reusable form component for adding or editing user details.
│   ├── UserForm.css      # Styling specific to the UserForm component.
│   ├── ErrorBoundary.js  # Handles and displays errors gracefully in the app.
├── App.js                # Root component that integrates all components.
├── index.js              # Entry point for the React application.


### Root Folder (umd_assignment/)
+ my_app/: Contains the React application files.
+ public/: Static files for the app.
+ src/: Core source files for the React application.

1. Key Files in src/

* App.js
Acts as the root component of the app.
Manages the overall structure and integrates UserList and UserForm.

* index.js
Entry point for the React application.
Renders the App component into the DOM.

2. Components in src/components/
* UserList.js

+ Displays a list of all users.
+ Includes buttons for "Add," "Edit," and "Delete" actions.
+ Handles fetching and rendering user data from the API.

* UserForm.js

+ A reusable form component for adding and editing user details.
+ Manages form state and handles submission via props (onSubmit and onCancel).

*ErrorBoundary.js

+ Captures and displays errors to prevent the app from crashing.
+ Wraps other components to catch unexpected runtime issues.

3. CSS Files
* App.css: Styles for the main App layout.
* UserForm.css: Styles specific to the UserForm component.
* UserList.css: Styles specific to the UserList component.

---

###  Challenges Faced

* Department Mapping:
Initially, handling the department field was tricky since the API did not natively support it. Mapping the company.name to the department involved additional logic to ensure the data displayed correctly.

### Improvements with more time 

* Enhanced Validation:
Adding more detailed client-side validations, such as checking for duplicate emails or stricter field-specific rules, would improve data integrity.

* Deployment:
Hosting the application on platforms like Vercel or Netlify would make it accessible to others for demonstration purposes.

