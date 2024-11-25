// import express from 'express';
// import Camper from '../../model/Camper.js';

// const router = express.Router();

// router.get('/filter', async (req, res) => {
//   const { location, form, features } = req.query;

//   let filter = {};

//   if (location) {
//     filter.location = new RegExp(location, 'i');
//   }

//   if (form) {
//     filter.form = form;
//   }

//   if (features) {

//     const featuresArray = features.split(','); у
//     featuresArray.forEach((feature) => {
//       filter[`features.${feature}`] = true;
//     });
//   }

//   try {
//     const campers = await Camper.find(filter);
//     res.json(campers);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// module.exports = router;
