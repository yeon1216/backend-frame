'use strict';

const express = require('express');
const mysql = require("mysql");

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello 12345 gkgkggkgk');
});

app.get('/test',(req,res)=>{
  const connection = mysql.createConnection({
    // TODO : 환경설정 파일을 이용하여 user, password 정보 가려야함
    host: 'mariadb',
    user: "root", 
    password: "1234",
    database: "help_center_db"
  });
  connection.connect();
  connection.query("SELECT * FROM user_guide", function(err, rows, fields){
    if(!err){
      console.log(rows);
      console.log(fields);
      let result="rows: " + JSON.stringify(rows) + "<br><br>" + "fields: " + JSON.stringify(fields);
      res.send(result);
    } else {
      console.log("query error: " + err);
      res.send(err);
    }
  });
  connection.end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);