const dotenv = require("dotenv");
dotenv.config({ path: "./congfi.env" });

const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");

mongoose.connect(process.env.confugration_var)
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

  
// const newUser = new User({
//     name: "Ali",
//     email: "Ali@gmail.com",
//     password: "123",
//     confirmpassword: "123"
// });
// newUser.save();



// const newPost = new Post({
//     userid: "1234567891011",
//     title: "Al",
//     body: "mongoose"
// });
// newPost.save();


const newPost = new Post({
  userid: "66b8f2c1e9a1c4f8b1234567", 
  body: "mongoose"
});
newPost.save();