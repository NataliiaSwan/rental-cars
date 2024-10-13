import express from 'express';
import mongoose from 'mongoose';
import camperRoutes from './routes/camperRoutes.js';

const app = express();
app.use(express.json()); // Для парсингу JSON

// Підключення маршруту
app.use('/api/campers', camperRoutes);

// Підключення до бази даних та запуск сервера
mongoose
  .connect('mongodb://localhost/campers')
  .then(() => {
    app.listen(4000, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch((err) => console.log(err));
