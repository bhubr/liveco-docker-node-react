import { Router, Request, Response } from 'express';
import User from '../models/user';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.send(user);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      return res.status(422).send({
        error: 'Required field(s) missing'
      });
    }
    const user = await User.create({
      name, avatar,
    });
    res.send(user);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      return res.status(422).send({
        error: 'Required field(s) missing'
      });
    }
    const user = await User.findByIdAndUpdate(
      id,
      {
        name, avatar,
      },
      {
        new: true,
      }
    );
    res.send(user);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ret = await User.deleteOne({
      _id: id
    });
    res.send(ret);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

export { router };