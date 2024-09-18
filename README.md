# HRapple - Employee Management System

HRapple is a minimal, scalable employee management software specifically designed for **Apple Inc.** It allows HR teams to manage employee records, including their employment status, department, and important dates (e.g., birthdays, employment start date). It also enables employees to update their personal information and documents like CVs.
c
## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The purpose of this project is to build a functional employee management system that allows Apple Inc. to manage employee data, including personal information, employment status, and documents. The system will include different user roles like Admin, HR Staff, and Employees, each with its own access controls.

This project is developed by **Fatoki Olaitan** and **Sara BouBou** as part of a portfolio project.

## Features

- **Employee Data Management**: Store and update employee details (e.g., name, department, employment status, CV).
- **File Upload**: Secure storage for uploading employee CVs and profile images.
- **Reminders & Notifications**: Automated notifications for employee birthdays and leave reminders.
- **Role-based Access Control (RBAC)**: User roles (Admin, HR Staff, Employee) with specific access rights.
- **Dashboard**: A summary dashboard for HR to view key stats like new hires and upcoming events.

## Tech Stack

- **Backend**: Django, Django REST Framework (DRF)
- **Frontend**: React.js, Redux, Material-UI
- **Database**: PostgreSQL
- **File Storage**: Local storage (for development) / Free options for production
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render.com (Free hosting)

## Setup and Installation

### Prerequisites
- Python 3.8 or higher
- Node.js and npm (for the frontend)
- PostgreSQL (for database)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/HRapple.git
   cd HRapplec


   Frontend (React):

plaintext
Copy code
hrapple-frontend/
├── src/
│   ├── components/
│   │   ├── AddEmployeeForm.js
│   │   ├── EmployeeList.js
│   │   ├── LoginForm.js
│   ├── services/
│   │   ├── employeeService.js
└── ...
Installation
Prerequisites
Docker and Docker Compose installed
Node.js and npm (if running frontend separately)
Python and pip (for backend)
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/HRapple.git
cd HRapple
Create a virtual environment and install dependencies:

bash
Copy code
pip install -r requirements.txt
Run migrations and start the server:

bash
Copy code
python manage.py migrate
python manage.py runserver
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd hrapple-frontend
Install the necessary packages:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
Docker Setup
Build and run the containers:
bash
Copy code
docker-compose up --build
API Documentation
The backend provides a REST API for interacting with employee data.

Method	Endpoint	Description
GET	/api/employees/	List all employees
POST	/api/employees/	Add a new employee
GET	/api/employees/{id}/	Retrieve an employee
PUT	/api/employees/{id}/	Update an employee
DELETE	/api/employees/{id}/	Remove an employee
API documentation can be accessed through Swagger or ReDoc:

Swagger: /swagger/
ReDoc: /redoc/
Frontend Documentation
Main Components:

AddEmployeeForm.js: Form to add a new employee (with dropdowns for status and role).
Dashboard.js: Overview of employee actions.
EmployeeList.js: List and filter employees.
LoginForm.js: Handles authentication for access to the dashboard.
Deployment
To deploy this project using Docker:

Ensure Docker is installed.
Run:
bash
Copy code
docker-compose up --build
Access the project at http://localhost:3000 for the frontend and http://localhost:8000 for the backend.
Challenges Faced
CORS Issues: Initially faced issues with CORS when connecting the frontend to the backend. Resolved by configuring CORS settings in Django.
File Upload Handling: Handling employee document uploads (e.g., CVs) required proper media handling in Django and React.
Future Plans
Role-based access control for restricting certain actions to admin users.
Automated email notifications for employee status changes.
Enhanced analytics for employee data, such as employment trends.