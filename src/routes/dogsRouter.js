import { Router } from "express";

import dogsViewController from "../controllers/dogs/dogsViewController.js";
import {isAuthenticated, isAdmin} from "../middlewares/authMiddleware.js";
import upload from '../controllers/dogs/multerConfig.js'; 


const router = Router();

router.get("/", isAuthenticated, (req, res) => {
    dogsViewController.getAll(req, res);
});

router.get("/new", isAuthenticated, dogsViewController.createForm);

router.get("/:id", isAuthenticated, (req, res) => {
    dogsViewController.getById(req, res);
});
//le quito el isAdmin comentado porque me estaba dando problemas
router.post("/", isAuthenticated, upload.single('fotoSubir'), (req, res) => {
    dogsViewController.create(req, res);
});

router.get("/:id/edit", isAdmin, dogsViewController.updateForm);

router.post("/:id", isAuthenticated, /* isAdmin, */ (req, res) => {
    dogsViewController.update(req, res);
});

router.get("/:id/delete", isAuthenticated, /* isAdmin, */ (req, res) => {
    dogsViewController.remove(req, res);
})

export default router;