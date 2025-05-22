# 🏫 School Management API

A simple Node.js & Express.js API connected to MySQL that allows users to:

- Add schools to a database
- Retrieve a list of schools sorted by proximity to a user's location

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **Postman** (for API testing)

---

## Deployment

This project is deployed on [Render](https://render.com/) and can be accessed at the following URL:
[https://educase-intern-school-management.onrender.com](https://educase-intern-school-management.onrender.com)

The database is hosted on [Railway](https://railway.app/).

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JeetDas5/Educase-intern-school-management
   cd Educase-intern-school-management
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure database**

Update the `.env` file with your MySQL database credentials.

```bash
    DB_HOST
    DB_USER
    DB_PASSWORD
    DB_NAME
    DB_PORT
```

Create a MySQL database and a table using:

```sql
CREATE TABLE schools (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);
```

4. **Create a `.env` file**

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=your_database
   DB_PORT=3306
   ```

5. **Start the server**

   ```bash
   node app.js
   ```

   Your server should now be running at:
   `http://localhost:3000`

---

## 📘 API Endpoints

### ✅ Health Check

- `GET /`
- Response: `"API is running!"`

---

### 🏫 Add School

- `POST /addSchool`
- **Request Body:**

```json
{
  "name": "Delhi High School",
  "address": "Capital, Delhi",
  "latitude": 28.70406,
  "longitude": 77.102493
}
```

- **Response:**

```json
{
  "message": "School added successfully!"
}
```

---

### 📍 List Schools by Proximity

- `GET /listSchools?latitude=28.6139&longitude=77.2090`
- **Query Parameters:**

  - `latitude` — required
  - `longitude` — required

- **Response:**

```json
[
  {
    "id": 1,
    "name": "Delhi High School",
    "address": "Capital, Delhi",
    "latitude": 28.7041,
    "longitude": 77.1025,
    "distance": 1135.7983149984238
  }
]
```

---

## 🧪 Testing

Use [Postman](https://www.postman.com/) to test the API endpoints.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- Node.js & Express documentation
- MySQL documentation
