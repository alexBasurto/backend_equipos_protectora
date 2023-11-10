import publicController from "./publicController.js"

const getPublicDogsView = async (req, res) => {
    const errorMessage = req.query.error;
    const [error, dogs] = await publicController.getAll();
     // Ordenar el array de perros por yearOfBirth de más antiguo a más nuevo
  dogs.sort((a, b) => a.yearOfBirth - b.yearOfBirth);

    res.render("publicdogs/show", { error: error || errorMessage, dogs, session: req.session });
};

export default {getPublicDogsView};