import mongoose from 'mongoose';

const camperSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  location: { type: String, required: true },
  form: { type: String, required: true }, // тип кузова
  description: { type: String },
  features: {
    AC: { type: Boolean, default: false },
    kitchen: { type: Boolean, default: false },
    bathroom: { type: Boolean, default: false },
    TV: { type: Boolean, default: false },
    radio: { type: Boolean, default: false },
    // інші можливі функції
  },
  gallery: [{ original: String, thumb: String }],
});

module.exports = mongoose.model('Camper', camperSchema);
