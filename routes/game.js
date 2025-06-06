const express=require("express");
const router=express.Router();
const {placeBet,getStats}=require("../controllers/gameController");
router.post("/bet",placeBet);
router.get("/stats",getStats);
module.exports=router;
