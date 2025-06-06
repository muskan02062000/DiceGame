const express=require('express');
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const gameRoutes=require("./routes/game");
dotenv.config();
const app=express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log(err));
app.use("api/game",gameRoutes);

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})
