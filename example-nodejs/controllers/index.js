const KullanicilarController = require("./kullanicilarController");

module.exports.controllerRootSlash = function (req, res, next) {
  try {
    const obj = { status: "not", version: "1.0.0", environment: "test" };

    res.setHeader("Last-Modified", new Date().toUTCString());

    res.format({
      "text/plain": function () {
        res.send(String(obj.status).toUpperCase());
      },

      "text/html": function () {
        res.render("index", obj);
      },

      "application/json": function () {
        res.json(obj);
      },

      default: function () {
        res.status(406).send("Not Acceptable");
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports.KullanicilarController = KullanicilarController;
