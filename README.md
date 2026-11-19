# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# 🐛 Bug Tracker / Issue Tracker (Jira-like)

A full-stack Issue Tracking System built using React.js and Spring Boot. This application helps teams manage projects, track issues, assign tasks, and collaborate using a Kanban workflow similar to Jira.

---

## 🚀 Features

- User Authentication using JWT
- Role-Based Access Control (Admin, Manager, Developer)
- Project Management
- Issue/Bug Creation and Assignment
- Kanban Board (To Do → In Progress → Done)
- Comments on Issues
- Issue Search & Filters
- Edit/Delete Issues
- File Upload Support
- Responsive UI

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- DnD Kit / React Beautiful DnD

### Backend
- Java 17
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate

### Database
- MongoDB

### Tools
- Maven
- Swagger OpenAPI
- Git & GitHub

---

## 📂 Project Structure

Frontend
```text
src/
├── components/
├── pages/
├── services/
├── routes/
└── App.jsx
```

Backend

```text
src/main/java/com/bugtracker
├── controller
├── service
├── repository
├── entity
├── dto
├── security
└── config
```

---

## 🔐 Authentication

- User Registration
- User Login
- JWT Token Generation
- Protected Routes
- Role-Based Authorization

---

## 📸 Screenshots
![authregistersucess.png](src/assets/authregistersucess.png)

![commentadded.png](src/assets/commentadded.png)

![commentsprofile.png](src/assets/commentsprofile.png)

![dashboard.png](src/assets/dashboard.png)


![filealert.png](src/assets/filealert.png)

![issuecounted.png](src/assets/issuecounted.png)

![issuesprofile.png](src/assets/issuesprofile.png)

![kanbanlist.png](src/assets/kanbanlist.png)

![login.png](src/assets/login.png)

![postingcomment.png](src/assets/postingcomment.png)


![projectadded.png](src/assets/projectadded.png)

![projectdelete.png](src/assets/projectdelete.png)

![projectsdetails.png](src/assets/projectsdetails.png)

![projectsprofile.png](src/assets/projectsprofile.png)

![register.png](src/assets/register.png)

![register-alert.png](src/assets/register-alert.png)

![selectedfile.png](src/assets/selectedfile.png)

![tokengeneratelogin.png](src/assets/tokengeneratelogin.png)

![uploadfileadded.png](src/assets/uploadfileadded.png)

![uploadfilrprofile.png](src/assets/uploadfilrprofile.png)

![userprofile.png](src/assets/userprofile.png)





---

## 📄 License

This project is developed for learning and educational purposes.