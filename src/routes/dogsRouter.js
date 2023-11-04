import { Router } from "express";

import dogsViewController from "../controllers/dogs/dogsViewController.js";
import {isAuthenticated, isAdmin} from "../middlewares/authMiddleware.js";
import upload from '../controllers/dogs/multerConfig.js'; 


const router = Router();

router.get("/", (req, res) => {
    dogsViewController.getAll(req, res);
});

router.get("/new", /* isAdmin, */ dogsViewController.createForm);

router.get("/:id", (req, res) => {
    dogsViewController.getById(req, res);
});
//le quito el isAdmin comentado porque me estaba dando problemas
router.post("/", upload.single('fotoSubir'), (req, res) => {
    dogsViewController.create(req, res);
});

router.get("/:id/edit", /* isAdmin, */ dogsViewController.updateForm);

router.post("/:id", /* isAdmin, */ (req, res) => {
    dogsViewController.update(req, res);
});

router.get("/:id/delete", /* isAdmin, */ (req, res) => {
    dogsViewController.remove(req, res);
})

export default router;