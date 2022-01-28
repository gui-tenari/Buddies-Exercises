const plants = require('../data');

const getPlants = () => {
  return plants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem("plants", JSON.stringify(filteredPlants));
  return filteredPlants;
};

module.exports = {
  getPlants,
}