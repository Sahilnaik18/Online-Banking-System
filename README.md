# 🏦 Online Banking System

Java Servlets · JSP · MySQL

---

## ✨ Description

The Online Banking System is a secure, user-friendly web-based platform that allows users to manage their bank accounts, transfer funds, apply for cards, pay bills, and much more—all from an intuitive interface.

Built with Java Servlets and JSP for the backend, and MySQL for data management, this project offers core banking functionalities with a focus on security and reliability.

---

## 🚀 Technologies Used

- **Backend:** Java Servlets, JSP, JDBC, MySQL
- **Frontend:** HTML, CSS, JavaScript
- **Other:** Apache Tomcat, Bootstrap (optional)

---

## 📚 Features Overview

### 🔐 Secure Authentication
- **User Registration & Login:** Users create secure accounts with password encryption.
- **Session Management:** User sessions are securely managed to prevent unauthorized access.

### 🏦 Account Management
- **Account Opening:** First-time users can apply for a new bank account by filling out necessary details.
- **Profile Page:** View and update personal details provided during registration.

### 💳 Bank Accounts
- **Open New Accounts:** Support for various account types (Savings, Current, Student, NRI, etc.).
- **Account Details:** View account number, IFSC code, available funds, and set up transaction pins.

### 💸 Fund Transfers
- **Transfer Funds:** Move money between self-accounts or to other users by specifying amount and transaction pin.
- **Validation:** System checks for sufficient funds and valid recipient accounts, with error prompts for issues.

### 💳 Card Management
- **Apply for Cards:** Users can apply for credit, debit, and other types of cards.
- **Card Details:** View card number, CVV, expiry date, available balance, and manage transaction pin.

### 🧾 Bill Payments
- **Pay Bills:** Settle bills in categories like water, mobile, electricity, and more (up to 8 categories).
- **Flexible Payment:** Pay via accounts or cards, with transaction pin required for each payment.

### 📜 Transaction History
- **View History:** Track all account transactions.
- **Export:** Download transaction history in PDF or CSV format.

### 🔐 Logout
- **Secure Logout:** Ends user session on both client and server for complete security.

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Sahilnaik18/Online-Banking-System.git
```

### 2. Backend (Java Servlets/JSP)

- Open the project in your Java IDE (Eclipse, IntelliJ, etc.).
- Create a MySQL database (e.g., `online_banking`).
- Run the SQL scripts from the `/database` directory to set up tables.
- Update your database credentials in `DBConnection.java` or the respective config file.
- Deploy the project on Apache Tomcat.

### 3. Frontend

- Launch Tomcat and access the app at:  
  `http://localhost:8080/Online-Banking-System/`

---

## 🧩 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

Please read our contributing guidelines for more details.

---

## 🔗 Links

- [LinkedIn](https://www.linkedin.com/in/sahilnaik18)
- [Gmail](mailto:sahilnaik18@gmail.com)

---
