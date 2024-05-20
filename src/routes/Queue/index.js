import { Router } from 'express';
const router = Router();

router.get('/queu', (req, res ) => {
    res.send('Queue');
})


export default router;