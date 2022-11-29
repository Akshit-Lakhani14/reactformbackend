var express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const fs = require("fs");
app.use(cors());
// parse application/json
app.use(bodyParser.json());
var i = 0;
//api
app.post('/store-data',(req, res) => {
   i = i+1;
  console.log("request no.",i);
  var data = {forms:req.body.forms};
 console.log(data.forms);
 var csv = JSONToCSV(data.forms, { fields: ["number", "name", "quantity","price","amount" ]});
    fs.writeFileSync("./destination.csv", csv);
 
})


//PORT
app.listen(1002, function () {
  console.log("Node app is running.");
});
