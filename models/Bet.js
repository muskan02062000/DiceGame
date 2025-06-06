const mongoose=require("mongoose");
const BetSchema=new mongoose.Schema({
  userName:String,
  amount:Number,
  betOn:{
    type:String,
    winAmount:Number,
    timeStamp:{
      type:Date,
      default:Date.now}});
module.exports=mongoose.model("Bet",BetSchema);
