# 🔳 QR Code Generator

A simple QR Code Generator web application with a **Node.js backend** and **Express server**.

---

## ✨ Features

- ✅ Generate QR codes for any text or URL.
- 🛠️ QR code generation handled on the backend using [`qr-image`](https://www.npmjs.com/package/qr-image).
- 🖥️ Simple and responsive frontend with HTML, CSS, and JavaScript.
- 🔗 API endpoint to generate QR codes dynamically.
- 🌐 Hosted locally or easily deployed on platforms like GitHub Pages (frontend) and any Node.js hosting (backend).
---

## 🗂️ Project Structure

qr-code-combined/
├── public/
 ├── index.html # Frontend HTML page
 └── styles.css # CSS styles for frontend
 
├── node_modules/ # Node.js dependencies

├── package.json # npm configuration

├── package-lock.json

└── server.js # Express server with QR code API

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- Git (optional, for cloning and version control)

---

## 🚀 How to Run the Project Locally
Follow these steps to get the project up and running on your machine:

steps_to_run_project:
  - Clone the repository
    commands:
      - git clone https://github.com/yourusername/qr-code-generator.git
      - cd qr-code-generator
  - Install dependencies
    commands:
      - npm install
  - Start the Express server
    commands:
      - node server.js
  - Open your browser
    instructions: Navigate to http://localhost:3000 to access the QR Code Generator app.
  - Use the app
    instructions:
      - Enter any text or URL into the input box.
      - Click the Generate button.
      - The generated QR code will appear below the input.

## Sample Output

<img width="395" alt="Screenshot 2025-06-26 at 1 40 36 PM" src="https://github.com/user-attachments/assets/b5794772-8268-4827-b928-d3c92b2c8d2c" />
