import { Router, Request, Response } from 'express';
import Link from '../models/link';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const links = await Link.find();
    res.send(links);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id);
    res.send(link);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, link: href } = req.body;
    if (!title || !href) {
      return res.status(422).send({
        error: 'Required field(s) missing'
      });
    }
    const link = await Link.create({
      title, link: href,
    });
    res.send(link);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, link: href } = req.body;
    if (!title || !href) {
      return res.status(422).send({
        error: 'Required field(s) missing'
      });
    }
    const link = await Link.findByIdAndUpdate(
      id,
      {
        title, link: href,
      },
      {
        new: true,
      }
    );
    res.send(link);
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ret = await Link.deleteOne({
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