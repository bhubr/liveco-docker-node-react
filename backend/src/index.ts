import express from 'express';
import { Application, Request, Response } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { router as apiRouter } from './routes';

connect("mongodb://127.0.0.1:27017/linksdb")
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

app.get('/message', (req, res) => {
  res.send({ message: 'Hello from Express' });
});

const port = 4400;
app.listen(port, () => console.log(`listening on port ${port}`));