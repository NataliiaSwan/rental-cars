import express from 'express';
import Camper from '../models/camper.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { location, form, hasAC, hasKitchen } = req.query;

    const filter = {};

    if (location) {
      filter.location = new RegExp(location, 'i'); // Регулярний вираз для нечутливої до регістру
    }

    if (form) {
      filter.form = form; // Вибір типу кузова
    }

    if (hasAC) {
      filter.hasAC = hasAC === 'true'; // Наявність кондиціонера
    }

    if (hasKitchen) {
      filter.hasKitchen = hasKitchen === 'true'; // Наявність кухні
    }

    const campers = await Camper.find(filter);
    res.json(campers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
