import * as express from 'express';
import ViewModel from '../models/viewModel';

const router = express.Router();

router.get('/', (req, res, next) => res.render('index', new ViewModel('test')));

export default router;