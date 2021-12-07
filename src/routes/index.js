const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Home")
});

router.get("/inicial", (req, res)=>{
    res.render("home")
});

router.get("/formulario", (req, res)=>{
    res.send("Formulario enviado!")
});

module.exports = router;