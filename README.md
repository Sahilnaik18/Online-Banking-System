# 🏦 Online Banking System

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Backend-green?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)](https://react.dev/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Google OAuth2](https://img.shields.io/badge/Google%20OAuth2-Authentication-4285F4?logo=google&logoColor=white)](https://developers.google.com/identity/protocols/oauth2)
[![Live Preview](https://img.shields.io/badge/Preview-Live-brightgreen)](https://github.com/Sahilnaik18/Online-Banking-System) <!-- Replace "#" with your preview URL -->


A modern, full-featured digital banking platform built with Spring Boot (backend), React (frontend), MySQL, and Google OAuth2 authentication.

---

## ✨ Description

The **Online Banking System** delivers a secure, intuitive, and robust digital banking experience. Users can manage accounts, transfer funds, apply for cards, pay bills, review transactions, and more — all via a user-friendly interface.

**Tech Stack:**
- **Backend:** [![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Backend-green?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JPA](https://img.shields.io/badge/JPA-ORM-orange)](https://www.oracle.com/java/technologies/persistence-jsp.html)
- **Frontend:** [![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Flowbite](https://img.shields.io/badge/Flowbite-UI%20Components-38BDF8?logo=flowbite&logoColor=white)](https://flowbite.com/)
[![React Icons](https://img.shields.io/badge/React%20Icons-Icons-blueviolet)](https://react-icons.github.io/react-icons/)
[![SweetAlert](https://img.shields.io/badge/SweetAlert-Alerts-FF5A5F)](https://sweetalert2.github.io/)
- **Authentication:** [![Google OAuth2](https://img.shields.io/badge/Google%20OAuth2-Authentication-4285F4?logo=google&logoColor=white)](https://developers.google.com/identity/protocols/oauth2)
- **Frontend Libraries:** [![Protected Routes](https://img.shields.io/badge/Protected%20Routes-Routing-yellowgreen)](#)
[![Context API](https://img.shields.io/badge/Context%20API-State%20Management-lightgrey)](https://react.dev/reference/react/useContext)


---

## 📚 Features Overview

### 🔐 Secure Authentication
- **Google OAuth2 Login:** Secure, seamless login via Google accounts.
- **Protected Routes:** Certain app areas are accessible only when logged in.

### 🏦 Account Management
- **Account Opening:** First-time users complete an application form post-login.
- **Profile Page:** View personal details provided during account creation.

### 💳 Bank Accounts
- **Open New Accounts:** Choose from 8 account types (Current, Savings, Student, NRI, etc.).
- **Account Details:** View account number, IFSC, available funds, and set up a transaction PIN.

### 💸 Fund Transfers
- **Transfer Funds:** Move money between own accounts or to others.
- **Validation:** System checks for errors (e.g., insufficient funds) and informs via Sweet Alerts.

### 💳 Card Management
- **Apply for Cards:** Choose from 8 card types (Credit, Debit, Gift, Virtual, etc.).
- **Card Details:** View card number, CVV, expiry, funds, and manage transaction PINs.

### 🧾 Bill Payments
- **Pay Bills:** Settle bills across 8 categories (Water, Mobile, Electricity, Internet, etc.).
- **Flexible Payments:** Pay via bank account or card — transaction PIN required.

### 📜 Transaction History
- **View History:** Browse all transactions.
- **Export:** Download transaction history as PDF or CSV.

### 🔐 Logout
- **Secure Logout:** Ends session on both frontend and backend for maximum security.

---

## 🛠️ Installation

### Backend (Spring Boot)
1. **Clone the repo:**
   ```bash
   git clone https://github.com/Sahilnaik18/Online-Banking-System.git
   ```
2. **Navigate to backend:**
   ```bash
   cd online-banking-system/backend
   ```
3. **Set up MySQL database:**  
   - Create a database in MySQL.
   - Configure credentials in `application.properties`.
4. **Configure Google OAuth2:**  
   - Create a Google Cloud project.
   - Set up OAuth2 credentials and update `application.properties`.
5. **Run the backend:**
   ```bash
   mvn spring-boot:run
   ```

### Frontend (React)
1. **Navigate to frontend:**
   ```bash
   cd ../frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the frontend:**
   ```bash
   npm run dev
   ```
4. **Access the app:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧩 Contributing

Contributions are welcome!  
To contribute:

1. **Fork the repository.**
2. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make & commit changes:**
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to your branch:**
   ```bash
   git push origin feature/your-feature
   ```
5. **Open a Pull Request.**

See our _Contributing Guidelines_ for more details.

---

## 🔗 Links

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sahilnaik18)
[![Gmail](https://img.shields.io/badge/Gmail-Email-red?logo=gmail&logoColor=white)](mailto:sahilnaik1515@gmail.com)
---
