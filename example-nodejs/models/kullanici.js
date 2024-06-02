const { mongoose, Schema } = require("mongoose");

const KullaniciSchema = new Schema(
  {
    ad: {
      type: String,
      required: true,
    },
    soyad: {
      type: String,
      required: true,
    },
    yas: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const KullaniciModeli = mongoose.model(
  "Kullanici",
  KullaniciSchema,
  "kullanici"
);
module.exports = KullaniciModeli;
