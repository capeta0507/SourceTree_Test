const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public')); //主機資源設定為 public 資料夾
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.get('/',(req,res)=>{
  res.send("Node.js + Express")
})
app.get('/hello',(req,res)=>{
  res.send("<h1>Hello new Get</h1>");
})
app.post('/worldpost',(req,res)=>{
  res.send("<h1>Hello worldpost</h1>");
})
app.listen(PORT,()=>{
  console.log(`Running on http://localhost:${PORT}`);
});

