const express=require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const User = require("./models/User");


const app=express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


app.use(express.json());
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://sameerdastagir5:Sameer@cluster0.h6v9w3e.mongodb.net/?retryWrites=true&w=majority",
   { useNewUrlParser: true, useUnifiedTopology: true }
);








app.post("/register", async (req, res) => {
  const { username, password } = req.body;
 
    const userDoc = await User.create({
      username,
      password
    });
    res.json(userDoc);
})


app.listen(4000);
//mongodb+srv://sameerdastagir5:Sameer@blog0.q2mg5vs.mongodb.net/?retryWrites=true&w=majority