import { Router } from 'express';
const RRouter = Router();


RRouter.get('/signup', (req, res ) => {
 res.send('SignUP');   
})

export default RRouter;