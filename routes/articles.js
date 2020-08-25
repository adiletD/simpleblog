const express = require("express")
const router = express.Router()


module.exports = router

router.get("/",(req,res)=>{
    res.send("in articles");
});

router.get("/new",(req,res)=>{
    res.render("articles/new");
});

