import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import flightRoutes from './src/server/routes/flight-routes.mjs';
import locationRoutes from './src/server/routes/location-routes.mjs';

dotenv.config();

const app = express();
const PORT = process.env.VITE_SERVER_PORT || 7374;

app.use(cors());
app.use(express.json());

app.use('/flights', flightRoutes);
app.use('/locations', locationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});