/**
 * Main application routes
 */

'use strict';
import { Router, Request, Response } from 'express';
import zipcode from './api/zipcode';

const router = Router();
router.use('/zipcode', zipcode);
router.get('/info', (req: Request, res: Response) => {
  res.send({ application: '<%= projectName %>', version: '1.0' });
});
router.post('/getback', (req: Request, res: Response) => {
  res.send({ ...req.body });
});

export default router;
