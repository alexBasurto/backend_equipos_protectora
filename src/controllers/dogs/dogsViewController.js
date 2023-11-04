import dogsController from "./dogsController.js";

const getAll = async (req, res) => {
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, dogs] = await dogsController.getAll(q);
    res.render("dogs/list", {
        error: error || errorMessage,
        dogs,
        session: req.session,
    });
};

const getById = async (req, res) => {
    const id = req.params.id;
    const [error, dog] = await dogsController.getById(id);
    res.render("dogs/show", { error, dog, session: req.session });
};

const createForm = async (req, res) => {
    const error = req.query.error;
    const [breedsError, breeds] = await dogsController.getAllBreeds();
    if (error || breedsError) {
        res.redirect("/dogs");
    }
    res.render("dogs/new", { breeds, error });
};

const create = async (req, res) => {
    const { name, color, size, behavior, yearOfBirth, comments, idBreed } =
        req.body;
     // Obtenemos el nombre del archivo de la solicitud
     const photo = req.file.filename;
   
    const [error, dog] = await dogsController.create(
        name,
        color,
        size,
        photo,
        behavior,
        yearOfBirth,
        comments,
        idBreed
    );
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/dogs/new?error=${uriError}`);
    }
    res.redirect("/dogs");
};

const updateForm = async (req, res) => {
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error, dog] = await dogsController.getById(id);
    const [breedsError, breeds] = await dogsController.getAllBreeds();
    if (error || breedsError) {
        res.redirect("/dogs");
    }
    res.render("dogs/edit", {
        error: errorMessage,
        dog,
        breeds,
        session: req.session,
    });
};

const update = async (req, res) => {
    const id = req.params.id;
    const { name, color, size, urlPhoto, behavior, year, comments, breed } =
        req.body;
    const [error, dog] = await dogsController.update(
        id,
        name,
        color,
        size,
        urlPhoto,
        behavior,
        year,
        comments,
        breed
    );
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/dogs/${id}/edit?error=${uriError}`);
    }
    res.redirect("/dogs");
};

const remove = async (req, res) => {
    const id = req.params.id;
    const [error, dog] = await dogsController.remove(id);
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/dogs?error=${uriError}`);
    }
    res.redirect("/dogs");
};

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
};
