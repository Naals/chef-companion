import express from 'express';
import dish from './dish.routes.js'
const router = express.Router({ mergeParams: true  });

router.use('/dish', dish);

export default router;