import Regions from "../../utils/regions/regions.js";

export default (req, res, next) => {
    const { region } = req.body;
    if(Object.values(Regions).includes(region)) next();
    else res.status(400).send("La región no es valida, revisa la documentación.");
}