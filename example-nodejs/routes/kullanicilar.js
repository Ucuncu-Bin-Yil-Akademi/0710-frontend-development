const express = require("express");
const router = express.Router();
const {
  kullanicilariGetir,
  kullaniciOlustur,
} = require("../controllers/kullanicilarController");

router.get("/", kullanicilariGetir);
router.post("/", kullaniciOlustur);

module.exports = router;
