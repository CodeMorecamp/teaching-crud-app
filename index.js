import express from "express";
import mysql from "mysql2";
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Fe1996mi@",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello, it is working");
});
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//if there is auth issues
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "PASSWORD"

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover` `cover`) VALUES (?)";
  const values = [
    "title from backend",
    "desc of backend",
    "cover from backend",
  ];
});

app.listen(8800, () => {
  console.log("connected to the backend");
});
