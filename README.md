# MERN Blog Platform with Google Auth

A full-stack blogging application where users can read public blogs without logging in, but must log in via Google to write and manage their own blogs.

Built using the **MERN Stack** (MongoDB, Express, React, Node.js) with **Google Authentication** and a clean UI using **Chakra UI**.


## Features

* **Google Authentication** (via `react-google-login`)
* **Create, Edit, Delete Blogs** (only when logged in)
*  **Read Public Blogs** (no login required)
*  **Responsive UI** with Chakra UI
*  JWT-based secure routing
*  Modular & Scalable Codebase


## 🛠 Tech Stack

| Frontend  | Backend       | Auth          | Styling   |
| --------- | ------------- | ------------- | --------- |
| React     | Node.js       | Google OAuth2 | Chakra UI |
| Chakra UI | Express.js    | JWT (server)  |           |
| Axios     | MongoDB Atlas |               |           |


## 📸 Screenshots

<img width="1296" alt="image" src="https://github.com/user-attachments/assets/01947d46-f74f-409a-af18-15839a7b150d" />

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/0363a25b-5f1d-47eb-972f-962ff9ded64f" />


##  Authentication Flow

* Visitors can **read blogs** without logging in.
* To **write a blog**, users must sign in via **Google Login**.
* After login, a JWT is issued and stored in localStorage for authentication with backend routes.


## Deployment

Example:
🔗 [Live Demo](https://blog-world.vercel.app/)


## Author

**Shailesh** — [LinkedIn](https://linkedin.com/shailesh-kr) • [GitHub](https://github.com/BondShailesh)
