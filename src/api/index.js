import { version } from '../../package.json';
import { Router } from 'express';
import photos from './photos'

export default ({ config, db }) => {
	let api = Router();

  api.use('/photos', photos({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
