# 🦷 Dental Clinic Appointment Management System — Frontend

A React-based frontend for a dental clinic appointment management system.

The application provides interfaces for patients to book appointments and doctors to manage their appointments through a dedicated dashboard.

## 📌 Overview

The frontend communicates with a Spring Boot REST API to provide a complete appointment management workflow.

The main workflow is:

Patient

↓

Select Dental Service

↓

Enter Patient Information

↓

Select Date & Time

↓

Book Appointment

↓

Backend API

↓

PostgreSQL

↓

Doctor Dashboard

↓

Manage Appointment Status

## ✨ Features

### 👤 Patient

- Browse dental services

- Select a dental service

- Enter patient information

- Select appointment date

- Select appointment time

- Submit an appointment request

### 👨‍⚕️ Doctor

- Doctor login

- JWT-based authentication

- Doctor dashboard

- View doctor's appointments

- View patient information

- View appointment details

- View dental service information

- Update appointment status

## 🛠️ Technologies

- React

- JavaScript

- HTML

- CSS

- REST APIs

- JWT Authentication

- Vite

## 🔐 Authentication

Doctor authentication is handled by the Spring Boot backend using JWT.

The authentication flow is:

Doctor Login

↓

Spring Boot Authentication API

↓

JWT Token

↓

Frontend

↓

Authorization Header

↓

Protected API Requests

The JWT token is used when making authenticated requests to protected backend endpoints.

## 🌐 Backend Integration

The frontend communicates with a separate Spring Boot REST API.

Some of the main API operations include:

```text

POST   /api/auth/login

POST   /api/appointments

GET    /api/appointments/my-appointments

PATCH  /api/appointments/{appointmentId}/status

📅 Appointment Management
Patients can create appointments by selecting a dental service and providing the required appointment information.
New appointments are initially created with a pending status.
Doctors can then manage the appointment status from their dashboard.

Example workflow:
PENDING
   ↓
CONFIRMED
   ↓
COMPLETED
An appointment can also be marked as:CANCELLED

🔄 Frontend–Backend Workflow
React
  ↓
REST API Request
  ↓
Spring Boot Controller
  ↓
Service Layer
  ↓
Repository
  ↓
PostgreSQL
  ↓
JSON Response
  ↓
React State
  ↓
UI

Project Structure
src/
├── components/
├── pages/
├── services/
├── assets/
└── ...
The application separates reusable components, pages, API-related functionality, and static assets.

Screenshots
Doctor Login
Doctor Dashboard
Appointment Booking

🔗 Backend

The backend application was developed separately using Java and Spring Boot.

Backend repository:
https://github.com/mahaal-Nefaie/dental-clinic-backend

👩‍💻 Author
Maha Al-Nefaie
