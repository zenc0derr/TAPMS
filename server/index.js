const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "h%qNT4KJVZ",
  database: "TAPMS",
});

 app.post("/addCompany", (req, res) => {
  const Comapny_Name = req.body.Comapny_Name;
  const Company_Website = req.body.Website
  const Company_id = req.body.id;

  db.query(
    "INSERT INTO Company (Company_ID, Comapny_Name, Website) VALUES (?,?,?)",
    [Company_id, Comapny_Name, Company_Website],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/company", (req, res) => {
  db.query("SELECT * FROM Company ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //const usertype = req.body.usertype;

  db.query(
    "select Username, Passwords from Registration where Username = ? and Passwords = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ msg: "Hi" });
      }
    }
  );
});

app.get("/student", (req, res) => {
  db.query("SELECT Full_name, Roll_no,School_Campus  FROM Students_Personal_Database ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/Editcompany", (req, res) => {
  const Company_id = req.body.Company_id;
  const Company_Name = req.body.Company_Name;
  const Company_Website = req.body.Company_Website;
  db.query(
    "UPDATE Company SET Comapny_Name = ?, Website = ? WHERE Company_ID = ?",
    [Company_Name, Company_Website, Company_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deleteCompany/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Company WHERE Company_ID = ?  ", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/deleteStudent/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Students_Personal_Database WHERE Roll_no = ?  ", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
