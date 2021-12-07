const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Home")
});

router.get("/inicial", (req, res)=>{
    res.render("home")
});


router.post("/formulario", (req, res)=>{
    res.render("formulario")
});

module.exports = router;