const express = require('express')
const bodyParser = require('body-parser')
const xlsx=require("xlsx")
const app = express()
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 

app.get('/getSingleStudent', function (req, res) {
  res.send('Riham Issa')
})


app.get("/getAllStudents",(req,res)=>{
  //res.send([
  //{id:14,name:"Anthony",age:24},
  //{id:17,name:"Elie",age:24},
  //{id:25,name:"Mhmd",age:22},
  //{id:44,name:"Riham",age:21},
  //{id:89,name:"Maya",age:20},
  //{id:103,name:"Youssef",age:19n}])
  
  let wb=xlsx.readFile("data.xlsx");
  let ws=wb.Sheets["students"];
  let data=xlsx.utils.sheet_to_json(ws);

  res.send(data);
})
app.post('/login', function (req, res) {
  let _username=req.body.username;
  let _password=req.body.password;
  if(_username=="riham" && _password=="issa")
  {res.status(200).send("Success")}
  else {res.status(403).send("Failure")}

})
app.listen(3000)
