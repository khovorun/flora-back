import 'dotenv/config';
import app from './app.js';
import db from './db/connection.js';
import './models/Product.js';
import './models/Feedback.js';
import './models/Purchase.js';

const PORT = process.env.PORT || 3000;

const launch = async () => {
  try {
    await db.authenticate();
    console.log('Підключення до бд готове');

    if (process.env.DB_SYNC === 'true') {
      await db.sync({ alter: true });
    }

    app.listen(PORT, () => {
      console.log(`Сервер запущено: http://localhost:${PORT}`);
      console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error('Помилка підключення до бази даних:', err.message);
    process.exit(1);
  }
};

launch();
