import express from 'express';
import { Application, Request, Response } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { router as apiRouter } from './routes';

// Utilisation d'une variable d'environnement avec une valeur
// par défaut (sera utile plus tard pour faire communiquer le back
// avec la db Mongo)
const mongoHost = process.env.MONGO_HOST || '127.0.0.1';
const mongoUrl = `mongodb://${mongoHost}:27017/linksdb`;

connect(mongoUrl)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

process.on('SIGINT', () => {
  console.log('Detected interruption');
  process.exit();
})

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);

// Route juste pour tester le back sans la database
app.get('/message', (req, res) => {
  res.send({ message: 'Hello from Express' });
});

const port = 4400;
app.listen(port, () => console.log(`listening on port ${port}`));