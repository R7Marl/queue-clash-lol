import { Regions } from '../../../shared/constants/regions.js';

export const validateRegion = (req, res, next) => {
  const { region } = req.body;
  if (!region || !Object.values(Regions).includes(region)) {
    return res.status(400).send('La región no es valida, revisa la documentación.');
  }
  next();
};
