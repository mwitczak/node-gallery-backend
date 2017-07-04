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

  return api;
}
