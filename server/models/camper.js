import mongoose from 'mongoose';

const camperSchema = new mongoose.Schema({
  name: String,
  location: String,
  form: String,
  hasAC: Boolean,
  hasKitchen: Boolean,
  // інші поля...
});

const Camper = mongoose.model('Camper', camperSchema);

module.exports = Camper;
