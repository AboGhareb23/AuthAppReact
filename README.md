# Auth App By React
انشاء نظام تسجيل الدخول باستخدام رياكت و نود جي اس وقواعد بيانات mysql
- mkdir server
     cd server
- npm init -y
- npm install express mysql bcrypt jsonwebtoken cors body-parser

- CREATE DATABASE auth_app;

USE auth_app;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

-  npx create-react-app client
    cd client
-  npm install
- npm run build
- npm install concurrently
and copy
 "scripts": {
    "server": "node server.js", 
    "client": "npm start --prefix tasks", 
    "start": "concurrently \"npm run server\" \"npm run client\""
  },
- npm start


