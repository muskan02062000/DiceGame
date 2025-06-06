const Bet=require("../models/Bet");
const rollDice=()=>{
  const die1=Math.ceil(Math.random()*6);
  const die2=Math.ceil(Math.random()*6);
  return die1+die2;
}
exports.placeBet=async(req,res)=>{
  const{username,amount,betOn}=req.body;
  if(!["UP","DOWN","EXACT"].includes(betOn)){
    return res.status(400).json({error:"Invalid bet option"});
  }
  const diceTotal=rollDice();
  let result=diceTotal>7?"UP":(diceTotal<7?"DOWN":"EXACT");
  let winAmount=0;
  if(betOn===result){
    winAmount=betOn==="EXACT"?amount*4 :amount*2}
  const bet=new Bet({username,amount.betOn,result,winAmount});
await bet.save();
  res.json({
    diceTotak,
    result,
    win:betOn===result,
    winAmount
  })
};
exports.getStats=await Bet.aggregate([
  {
    $group:{
      _id:"$betOn",
      totalBets:{$sum:1},
      totalAmount:{$sum:"$amount"},
      totalWin: {$sum:"$winAmount"}
    }
  }
  ]);
res.json(stats);
};
