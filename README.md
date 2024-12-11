# TastyDash - A Full-Stack Food Ordering Platform

TastyDash is a state-of-the-art food ordering website designed to deliver a seamless and engaging user experience. Customers can effortlessly browse through a variety of food items, add their favorites to a professional-grade cart system, and place orders with confidence through secure Stripe integration. The platform combines a modern frontend built with React and Tailwind CSS with a robust backend powered by Express.js and MongoDB, ensuring reliability, scalability, and security.

---

## Features

### Frontend

- Framework: Built with React for dynamic and interactive user experiences.
- Styling: Tailwind CSS ensures a modern, responsive, and mobile-friendly design.
- Routing: Dynamic navigation enabled using React Router DOM.
- API Integration: Smooth interaction with backend APIs for real-time updates and functionality.

### Backend

- Framework: Developed using Express.js for robust and scalable API services.
- Database: MongoDB for efficient storage and retrieval of blog data.
- Helmet: Protects against common security vulnerabilities.
- CORS: Enables secure cross-origin requests.
- xss-clean: Safeguards against cross-site scripting (XSS) attacks.
- express-mongo-sanitize: Prevents NoSQL injection attacks.
- File Handling: Image uploads powered by Cloudinary for efficient media management.
- Rate Limiting: Controls request frequency to prevent abuse.
- Authentication: Secure API access using JWT-based authentication.
- Helmet: Protects against common security vulnerabilities by setting HTTP headers.
- CORS: Enables secure cross-origin requests, allowing controlled access to resources.
- xss-clean: Safeguards against cross-site scripting (XSS) attacks by sanitizing user input.
- express-mongo-sanitize: Prevents NoSQL injection attacks by filtering malicious inputs.
- File Handling: Image uploads powered by Cloudinary for efficient and scalable media management.
- Rate Limiting: Controls request frequency to prevent abuse and ensure application stability.
- Authentication: Ensures secure API access using robust JWT-based authentication.
- bcrypt: Safeguards sensitive data by securely hashing passwords.
- body-parser: Parses incoming request bodies to make data processing efficient and streamlined.
- Cloudinary: Simplifies media storage, optimization, and delivery with a scalable cloud solution.
- Validator: Validates and sanitizes user inputs to ensure data integrity and security.

---

## Live Links

- **Frontend (Client)**: [TastyDash Frontend](https://tasty-dash.vercel.app)
- **Backend (Server)**: [TastyDash Backend](https://tasty-dash-backend.vercel.app)

---

## API Endpoints

### Base URL

`http://localhost:4100/api`

### Routes

- **Food Routes**: `/food`
- **User routes**: `/user`
- **cart routes**: `/cart`
- **order routes**: `/order`

---

## Scripts

### Frontend

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the development server     |
| `npm run build`   | Build the project for production |
| `npm run lint`    | Run the linter                   |
| `npm run preview` | Preview the production build     |

### Backend

| Command     | Description                           |
| ----------- | ------------------------------------- |
| `npm start` | Start the backend server with nodemon |

---

## Deployment

### Frontend

- Hosted on [Vercel](https://www.vercel.com/).

### Backend

- Hosted on [Vercel](https://vercel.com/).

---

## Project Structure

### Frontend

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── App.jsx
└── package.json
```

### Backend

```
backend/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── index.js
└── package.json
```

---

---

## Author

**Gazi Ashiq Reza Gaffari**  
[MERN Stack Developer](https://github.com/Ashiq121914)
