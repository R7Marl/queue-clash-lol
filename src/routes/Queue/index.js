import { Router } from 'express';
const router = Router();

router.get('/', (req, res ) => {
    res.send('Queue');
})


export default router;