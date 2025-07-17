# 🧾 RecipeVaultPro

RecipeVaultPro is a full-stack MERN application for managing personal recipes. Users can create, view, edit, and delete recipes, organized by categories.

## 🔗 Live Demo

- **Frontend (Netlify)**: [https://mellow-marshmallow-bd817a.netlify.app/](https://mellow-marshmallow-bd817a.netlify.app/)

---

## 🛠 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas
- **Auth**: JWT-based Authentication

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- 🗂 Category Management
- 📖 Full CRUD for Recipes
- 🖼 Image Uploads (Cloudinary or local storage)
- 🌐 Deployed: Netlify (Frontend) + Render (Backend)

---

## 🧩 Folder Structure

RecipeVaultPro/
├── client/ # React Frontend
│ └── dist/ # Built folder for Netlify
├── server/ # Express Backend


---

## 🧪 Installation & Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/RecipeVaultPro.git
cd RecipeVaultPro

cd server
npm install

🔑 Create .env file inside /server:

env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
 Run the backend:

npm run dev

3. Setup Frontend
cd ../client
npm install

✅ Start development server:

npm run dev

✅ Build for production:

npm run build


🌍 Deployment
🔹 Frontend on Netlify
Run npm run build inside client

Drag-and-drop /dist to Netlify OR connect to GitHub

Set publish directory to dist

🔗 Deployed Frontend:
https://mellow-marshmallow-bd817a.netlify.app/




🌍 Deployment
🔹 Frontend on Netlify
Run npm run build inside client

Drag-and-drop /dist to Netlify OR connect to GitHub

Set publish directory to dist

🔗 Deployed Frontend:
https://mellow-marshmallow-bd817a.netlify.app/


👩‍🍳 Author
RecipeVaultPro by Imbuye Ivette





