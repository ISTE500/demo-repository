# Tech Savvy Rides - Full Stack React Dashboard (Vite + SWC + Moonstack)

A fully responsive, interactive admin dashboard for managing clients, drivers, rides, schedules, reports, and settings. Built with **Vite + React + SWC**, styled using modular CSS and CSS variables, and architected to integrate seamlessly into a MongoDB/Node.js backend (Moonstack).

---

## 🚀 Tech Stack

- **Frontend:** React 18 (with Vite + SWC)
- **Routing:** React Router DOM
- **Styling:** CSS Modules + CSS Variables
- **Icons:** Font Awesome 6
- **Build Tool:** Vite
- **Ready for:** MongoDB + Express + Node (Moonstack)

---

## 📂 Folder Structure

```
tech-savvy-rides/
├── public/                  # static assets
├── src/
│   ├── assets/              # profile images, icons, avatars
│   ├── components/          # reusable UI (Header, Sidebar)
│   ├── pages/               # all app views (Clients, Drivers, etc)
│   ├── styles/              # global variables.css
│   ├── App.jsx              # React Router routes
│   ├── main.jsx             # entry point
├── index.html               # root HTML
├── package.json             # dependencies
└── vite.config.js           # Vite config
```

---

## 🧪 How to Run

### 1. 📦 Install Vite + React Template

```bash
npm create vite@latest tech-savvy-rides
```

**Select options:**

```
✔ Project name: tech-savvy-rides
✔ Framework: React
✔ Variant: JavaScript + SWC
```

Then:

```bash
cd tech-savvy-rides
npm install
```

### 2. 🔧 Install Required Dependencies

```bash
npm install react-router-dom
```

### 3. 🌐 Add FontAwesome (in `public/index.html`)

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
```

### 4. 🔁 Run the App

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## ✨ Features

- 🚗 Clients page with add/view/delete functionality
- 👨‍✈️ Drivers page with ratings and filters
- 📅 Schedule page with calendar grid layout
- 🧾 Reports page with stat cards and table
- ⚙️ Settings with tabs (Profile, Security, User Roles)
- 🏠 Admin Dashboard summary
- 🔐 Login page with toggle and auth logic
- ✅ Responsive layout and virtual-DOM navigation

---

## 🛡️ Login Credentials

```
Email: admin@demo.com
Password: password
```

> This is a static login for demo purposes. To connect to a real backend, integrate with Express + MongoDB.

---

## 🔌 Backend (Optional)

If you want to connect this frontend to an actual database:

- Clone or create a Node/Express backend
- Add JWT login, user model, and client/ride collections
- Hook up with MongoDB Atlas or local Mongo
- Use Axios or Fetch in this frontend to send/receive data

---

## 📦 Build for Production

```bash
npm run build
```

Then deploy `dist/` to Netlify, Vercel, or any static host.

---

## 👨‍💻 Authors

- Adhel Siddique (Frontend Dev)
- AI-assisted code generation by ChatGPT (React Components, Styling, Docs)

---

## 📝 License

MIT — Free for personal and commercial use.
