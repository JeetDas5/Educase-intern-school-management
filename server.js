const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");
require("dotenv").config();
const db = require("./config/db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
