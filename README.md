Project Management Dashboard
A Project Management Dashboard built with React, Redux, and React Router. This application allows users to manage multiple projects, each containing tasks that can be added, moved between states (To Do, In Progress, Done), and deleted. The dashboard provides a clean and intuitive interface for organizing tasks and projects.


Features
Dashboard Page:

View a list of projects.

Each project displays its tasks with a delete button.

Navigate to the project details page by clicking on a project.

Project Details Page:

View and manage tasks for a specific project.

Add new tasks using a form.

Move tasks between states (To Do, In Progress, Done) using drag-and-drop.

Delete tasks.

Add Project:

Add new projects to the dashboard using a form.



Technologies Used
Frontend:

React

Redux (for state management)

React Router (for routing)

Formik (for form handling)

Yup (for form validation)

React DnD (for drag-and-drop functionality)

Styling:

Inline CSS (for simplicity)
external css
Material Ui

Usage
Dashboard Page (/dashboard)
Displays a list of projects.

Each project shows its tasks with a delete button.

Click on a project to navigate to its details page.

Project Details Page (/project/:id)
View and manage tasks for the selected project.

Add new tasks using the "Add Task" form.

Move tasks between states (To Do, In Progress, Done) using drag-and-drop.

Delete tasks using the delete button.

Add Project
Use the "Add Project" form on the dashboard to create a new project.



# Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js (v14 or higher) - Download Node.js

npm (v6 or higher) - Comes bundled with Node.js

Code Editor (e.g., Visual Studio Code)

# Create a New React Project
npx create-react-app project-management
 
 # Navigate into the project folder:
 cd project-management

 # Install Required Dependencies
 npm install @reduxjs/toolkit react-redux react-router-dom formik yup react-dnd react-dnd-html5-backend

 # Set Up Redux
   <Provider store={store}>
    <App />
  </Provider>,

  # Set Up the Router

  # run the applicarion 
  npm start