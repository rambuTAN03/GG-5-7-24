const express = require('express')
const app = express()
const mysql = require("mysql"); //npm install mysqljs/mysql
const cors = require("cors");
//const port = 3000

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    password: "",
    database: "gearguards",
});

app.get('/', (req, res) => {
  res.send('Hello Worlde!')
})

app.get('/forTable', (req, res) => {
  db.query("SELECT * from borrowedtransaction", (err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/getAdmin', (req, res) => {
  db.query("SELECT * from user where admin = 1", (err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/getAvail', (req, res) => { // Borrow 
  db.query("SELECT * from item ", (err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/getItems', (req, res) => {
  db.query("SELECT * from item", (err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/CreateItem', (req, res) => {
    const ItemName = req.body.ItemName;
    const FromLab = req.body.FromLab;
    const ItemDescription = req.body.ItemDescription
    const Quantity = req.body.Quantity

    db.query(
      "INSERT INTO item (ItemName, FromLab, ItemDescription, Quantity) VALUES (?,?,?,?)",
      [ItemName, FromLab, ItemDescription, Quantity],
      (err, result) => {
        if (err){
          console.log(err);
        } else {
          res.send("Item Added Successfully!");
        }
     }
   );
});

app.get('/getBorrowing', (req, res) => {
  db.query("SELECT * from borrowedtransaction where Status = 'Borrowing'", (err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 

app.listen(3206, () => {
    console.log("Server is running on port 3206")
  }) 