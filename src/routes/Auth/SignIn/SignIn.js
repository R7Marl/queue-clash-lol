import { Router } from 'express';
const LRouter = Router();


LRouter.get('/signin', (req, res ) => {
 res.send('signin');   
})

export default LRouter;