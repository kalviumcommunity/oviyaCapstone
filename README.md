# oviyaCapstone
# 🌱 Oviya Nursery School – Full Stack Web Application

This project is a **Nursery School Management System** built using the MERN stack (MongoDB, Express, React, Node.js) with modern tooling like Vite, TailwindCSS, and Socket.io. It aims to streamline communication, gallery management, announcements, reports, and more between the school administration and parents.
## 🔍 Features

### 🧑‍🏫 Admin Capabilities
- Post **notices** for parents and staff.
- Upload and manage a **photo gallery**.
- View **contact messages** sent by parents.
- Manage **reports** and student-related documentation.

### 👨‍👩‍👧 Parent/Guardian Access
- Receive real-time **chat updates** and school announcements.
- View and interact with the **school gallery**.
- Send **contact messages** or queries.
- Access their child's **reports** and updates.

---

## 🧩 Technology Stack

### 🌐 Frontend
- **React 18**
- **React Router DOM** – Client-side routing
- **Tailwind CSS** – Utility-first styling
- **Vite** – Lightning-fast frontend tooling
- **React Hot Toast** – Notifications
- **Lucide Icons** – Lightweight icons

### ⚙️ Backend
- **Express.js** – RESTful API
- **Mongoose** – MongoDB ODM
- **JWT & Bcrypt** – Authentication and security
- **Socket.io** – Real-time messaging
- **Multer** – File uploads
- **Cloudinary** – Image hosting

---

## 🗃️ Folder Structure

```

project/
├── server/                # Backend logic
│   ├── models/            # Mongoose models (User, Notice, Chat, Report, etc.)
│   ├── routes/            # Express route handlers
│   ├── middleware/        # Auth middlewares
│   └── server.js          # App entry point
├── client/                # Frontend (React + Vite) - Missing in current version
├── .env                   # Environment variables
└── package.json           # Project metadata

````

---




## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/oviya-nursery-school.git
cd project
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4. Run the application

```bash
npm run dev
```

This will concurrently start:

* `Vite` frontend development server
* `Nodemon` backend server

---

## 🛣️ API Endpoints Overview

| Endpoint   | Description                |
| ---------- | -------------------------- |
| `/auth`    | User authentication routes |
| `/gallery` | Upload/view school gallery |
| `/report`  | Manage student reports     |
| `/notice`  | Post/view notices          |
| `/chat`    | Real-time messaging routes |
| `/contact` | Submit/view contact forms  |

---

## 🔐 Authentication

* JWT-based user sessions.
* Login credentials encrypted using `bcryptjs`.

---

## 🌐 Deployment

The app is suitable for deployment on:

* **Frontend**:  [Netlify](https://netlify.com)
* **Backend**: [Render](https://render.com).
---

## 📌 To Do (Suggestions)

* Integrate Role-based Access Control (RBAC)
* Add email notifications
* Implement frontend dashboard and mobile responsiveness

---

## 👩‍💻 Author

**S. Oviya** – Developer & Mentor
