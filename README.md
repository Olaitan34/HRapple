# HRapple - Employee Management System

HRapple is a minimal, scalable employee management software specifically designed for **Apple Inc.** It allows HR teams to manage employee records, including their employment status, department, and important dates (e.g., birthdays, employment start date). It also enables employees to update their personal information and documents like CVs.

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
   cd HRapple