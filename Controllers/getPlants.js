const PlantsServices = require('../Services/getPlants');

const getPlants = (req, res, next) => {
  try {
    const plants = PlantsServices.getPlants();
    res.status(200).json(plants);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getPlants,
}