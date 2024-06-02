const express = require("express");
const router = express.Router();
const kullanicilarRoutes = require("./kullanicilar");
const { controllerRootSlash } = require("../controllers");

router.get("/", controllerRootSlash);
router.use("/kullanicilar", kullanicilarRoutes);

module.exports = router;
