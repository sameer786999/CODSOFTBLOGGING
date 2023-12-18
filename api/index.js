const express=require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const secret = "asdfe45we45w345wegw345werjktjwertkj";
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const Post = require("./models/Post");
const fs = require("fs");




const app=express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


app.use(express.json());
app.use(cookieParser());
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://sameerdastagir5:Sameer@cluster0.h6v9w3e.mongodb.net/?retryWrites=true&w=majority",
   { useNewUrlParser: true, useUnifiedTopology: true }
);





app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});



app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }

});


app.get("/profile", (req, res) => {
  res.json(req.cookies);  
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});


app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);



    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath
     
    });
    res.json(postDoc);



    

  });

  





app.listen(4000);
//mongodb+srv://sameerdastagir5:Sameer@blog0.q2mg5vs.mongodb.net/?retryWrites=true&w=majority


