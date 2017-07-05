import { version } from '../../package.json';
import { Router } from 'express';

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

  api.post('/', (req, res) => {
    const url = req.body.url;

    if (!url) {
      throw new Error('Url not specified');
    }

    db.insert({url: url}).into('Photos').then(result => {
      res.status(201).json(result);
    });
  });

  return api;
}
