const KullaniciModeli = require("../models/kullanici");

const controller = {
  async kullanicilariGetir(req, res) {
    try {
      const allUsers = await KullaniciModeli.find();

      res.status(200).json({
        users: allUsers,
        totalUserCount: 5,
      });
    } catch (error) {
      next(error);
    }
  },

  async kullaniciOlustur(req, res, next) {
    try {
      const { ad, soyad, yas } = req.body;

      /*  const kullanici = await KullaniciModeli({
        ad,
        soyad,
        yas,
      });

      await kullanici.save(); */

      await KullaniciModeli.create({ ad, soyad, yas });

      const allUsers = await KullaniciModeli.find();

      res.json({
        message: "Kullanici eklendi.",
        user: allUsers,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = controller;
