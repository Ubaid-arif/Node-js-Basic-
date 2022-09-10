const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("port is runing 3000");
});

app.use("/ads", (req, res) => {
  const ads = [
    { title: "iphone", price: 5000 },
    { title: "Car", price: 9000 },
    { title: "laptop", price: 8000 },
    { title: "iphone", price: 5000 },
    { title: "Car", price: 9000 },
    { title: "laptop", price: 8000 },
    { title: "iphone", price: 5000 },
    { title: "Car", price: 9000 },
    { title: "laptop", price: 8000 },
  ];
  res.send(ads);
});
//Data Base
