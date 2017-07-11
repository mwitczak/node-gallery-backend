import { Router } from 'express';

export default ({ config, db }) => {
  let api = Router();

  api.get('/', (req, res) => {
    db.select('*').from('Galleries')
      .then(
        values => res.json(values)
      ).catch(
      err => console.log(err)
    );
  });

  api.post('/', (req, res) => {
    const name = req.body.name;

    if (!name) {
      throw new Error('Name not specified');
    }

    db.insert({name: name}).into('Galleries').then(result => {
      res.status(201).json(result);
    });
  });

  api.delete('/:id', (req, res) => {
    const id = req.params.id;

    db('Galleries').where('id', id).del().then(deleted => {
      if (deleted > 0) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    });
  });

  return api;
}
