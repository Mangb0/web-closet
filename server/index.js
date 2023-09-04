const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "closetDB",
});

connection.connect((err) => {
  console.log(err);
  console.log("Connected to MySQL Server!");
});

// app.get/ db query select * from cloth
// app.get("/", (req, res) => {
//   connection.query("SELECT * FROM cloth", (err, rows, fields) => {
//     if (err) throw err;
//     res.send(rows);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
