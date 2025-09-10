# 🔐 Password Manager (MongoDB Variant)

A powerful **Password Manager** built with React frontend and Express.js backend that securely stores your credentials in **MongoDB database**.  
Complete full-stack solution with persistent data storage and RESTful API architecture.

---

## 🚀 Why use this MongoDB variant?

Managing multiple accounts is hard.  
Reusing the same password is risky.  
Forgetting them is frustrating.  

This full-stack solution gives you:  
✅ **Persistent Storage** — your data survives browser refreshes and device changes.  
✅ **Scalable Backend** — MongoDB provides robust data management.  
✅ **RESTful API** — clean separation of frontend and backend logic.  
✅ **Real Database** — professional-grade data persistence.  

Take control of your digital life with enterprise-level architecture — **start now**.

---

## ✨ Features

- 🗄️ **MongoDB Database** – Persistent storage with professional database management.  
- 🔗 **RESTful API** – Clean backend architecture with Express.js.  
- 👁️ **Show/Hide Passwords** – Toggle visibility anytime.  
- 📋 **One-click Copy** – Instantly copy site, username, or password.  
- 📝 **CRUD Operations** – Create, Read, Update, Delete credentials seamlessly.  
- 🔔 **Smart Notifications** – Get real-time feedback with toast alerts.  
- 🎨 **Modern UI & Animations** – Built with Framer Motion, TailwindCSS, and Lordicon icons.  
- 📱 **Responsive Design** – Works on desktop, tablet, and mobile.  
- 🌐 **Full-Stack Architecture** – Separate frontend and backend for scalability.

---

## 🧑‍💻 What You'll Learn (if you're building this)

- Building **full-stack applications** with React + Express.js + MongoDB.  
- Creating **RESTful APIs** with proper HTTP methods (GET, POST, PUT, DELETE).  
- **Database operations** with MongoDB and native MongoDB driver.  
- **Frontend-Backend communication** with fetch API and async/await.  
- Managing **CORS** and **middleware** in Express.js.  
- **Environment configuration** with dotenv.  
- **Database connection management** and error handling.  
- **State management** in React with database persistence.

---

## 📂 Project Structure

```
├── backend/
│   ├── server.js              # Express server with MongoDB connection
│   ├── package-lock.json           # Backend dependencies
|   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
├── frontend/
│   ├── public/
│   │   ├── content_copy.svg
|   |   |── logo.png
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Manager.jsx    # Main password management component
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json           # Frontend dependencies
│   ├── package-lock.json      # Frontend dependencies
│   ├── index.html         
│   └── eslint.config.js
│   └── vite.config.js
└── README.md
```

---

## 🛠️ Tech Stack

**Frontend:**
- ⚛️ React.js  
- 🎨 TailwindCSS  
- 🎬 Framer Motion  
- 🔔 React Toastify  
- ⚡ Vite (build tool)

**Backend:**
- 🟢 Node.js  
- 🚀 Express.js  
- 🍃 MongoDB (with native MongoDB driver)  
- 🔐 dotenv (environment variables)  
- 🌐 CORS middleware  
- 📦 Body-parser

---

## 🚦 Getting Started

### Prerequisites
- Node.js installed on your machine  
- MongoDB installed and running locally  
- Git for cloning the repository

### Installation Steps

1. **Clone this repository**
```
git clone https://github.com/Arsh-pixel-cmd/Password-Manager-MongoDB
cd Password-Manager-MongoDB
```

2. **Set up Backend**
```
# Navigate to backend directory (or open in separate VS Code window)
cd backend
npm install
```

3. **Set up Frontend**
```
# Open new terminal/VS Code window for frontend
cd frontend
npm install
```

4. **Start MongoDB**
Make sure MongoDB is running on your local machine at `mongodb:/YOUR_URL`

5. **Run the Application**

**Terminal 1 - Backend Server:**
```
# In backend directory
nodemon server.js
```
*Server will start on http://localhost:3000*

**Terminal 2 - Frontend Development Server:**
```
# In frontend directory (separate terminal/VS Code window)
npm run dev
```
*Frontend will start on http://localhost:5173*

### Important Setup Notes

- **Run backend in separate VS Code window** - Don't run both frontend and backend in the same VS Code instance
- **Use `nodemon server.js`** for backend development server with auto-restart
- **Keep MongoDB running** while the server is active
- **Database will be created automatically** with name `PasswordManager` and collection `passwords`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/passwords` | Retrieve all passwords |
| POST | `/api/passwords` | Create new password entry |
| PUT | `/api/passwords/:id` | Update existing password |
| DELETE | `/api/passwords/:id` | Delete password entry |

---

## 🗄️ Database Schema

**Collection:** `passwords`
```
{
  _id: ObjectId,          // MongoDB auto-generated ID
  site: String,           // Website/service name
  username: String,       // Username/email
  password: String        // Password (consider encryption in production)
}
```

---

## 🚀 Development Workflow

1. **Backend Development:**
   - Make changes to `server.js`
   - `nodemon` will automatically restart the server
   - Test API endpoints using tools like Postman or browser

2. **Frontend Development:**
   - Make changes to React components
   - Vite will hot-reload the frontend automatically
   - Frontend communicates with backend via fetch API calls

3. **Database Management:**
   - Use MongoDB Compass or command line to view/manage data
   - Database connection is handled automatically by the server

---

## 🌟 Take Action Now

- **Use it as your production-ready password vault** — with database persistence.  
- **Scale it further** — add user authentication, encryption, or cloud deployment.  
- **Learn full-stack development** — perfect project for understanding React + Express + MongoDB.  
- **Deploy to production** — ready for hosting on platforms like Heroku, Railway, or Vercel.

---

## 🔒 Security Considerations

⚠️ **Important for Production:**
- Implement password encryption/hashing
- Add user authentication and authorization  
- Use environment variables for database credentials
- Implement input validation and sanitization
- Add rate limiting and security headers

---

## 🤝 Contributing

1. Fork the project  
2. Create a feature branch (`git checkout -b feature/newFeature`)  
3. Commit changes (`git commit -m "Added new feature"`)  
4. Push & Open a PR  

---

## 📜 License

Licensed under the **MIT License** — feel free to use & modify.  

---

## 🌐 Connect with Me

💼 [LinkedIn](https://www.linkedin.com/in/arsh-mishra-030093325/)  
💻 [GitHub](https://github.com/Arsh-pixel-cmd)
