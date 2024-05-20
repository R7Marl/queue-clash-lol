import { Router } from 'express';
const router = Router();

router.get('/queu', (req, res ) => {
    console.log(process.env.RIOT_API_KEY)
    res.send('Queue');
})


export default router;