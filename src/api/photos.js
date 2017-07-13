import { Router } from 'express';
import * as HttpStatus from 'http-status-codes'

export default ({ config, db }) => {
  let api = Router();

  api.get('/', (req, res) => {
    db.select('*').from('Photos')
      .then(
        values => res.json(values)
      ).catch(
        err => console.log(err)
    );
  });

  api.get('/:id', (req, res) => {
    const id = req.params.id;

    db.select('*').from('Photos').where('id', id).then(result => {
      if (result.length > 0) {
        res.status(HttpStatus.OK).json(result);
      } else {
        res.sendStatus(HttpStatus.NOT_FOUND);
      }
    });
  });

  api.post('/', (req, res) => {
    const url = req.body.url;

    if (!url) {
      throw new Error('Url not specified');
    }

    db.insert({url: url}).into('Photos').then(result => {
      res.status(HttpStatus.CREATED).json(result);
    });
  });

  api.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedFields = req.body;

    if (Object.keys(updatedFields).length === 0) {
      throw new Error('Fields not specified');
    }

    db('photos').where('id', id).update(updatedFields).then(updated => {
      if (updated > 0) {
        res.sendStatus(HttpStatus.NO_CONTENT);
      } else {
        res.sendStatus(HttpStatus.NOT_FOUND);
      }
    }).catch(err => {
      console.log(err);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
  });

  api.delete('/:id', (req, res) => {
    const id = req.params.id;

    db('photos').where('id', id).del().then(deleted => {
      if (deleted > 0) {
        res.sendStatus(HttpStatus.NO_CONTENT);
      } else {
        res.sendStatus(HttpStatus.NOT_FOUND);
      }
    }).catch(err => {
      console.log(err);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
  });

  return api;
}
