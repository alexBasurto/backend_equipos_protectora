 import { Router } from "express";

import staffViewController from "../controllers/staff/staffViewController.js";
import {isAuthenticated, isAdmin} from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", (req, res) => {
    staffViewController.getAll(req, res);
});

router.get("/new", /* isAdmin, */ staffViewController.createForm);

router.get("/:id", (req, res) => {
    staffViewController.getById(req, res);
});

router.post("/", /* isAdmin, */ (req, res) => {
    staffViewController.create(req, res);
});

router.get("/:id/edit", /* isAdmin, */ staffViewController.updateForm);

router.post("/:id",/* isAdmin, */ (req, res) => {
    staffViewController.update(req, res);
});

router.get("/:id/delete", /* isAdmin, */ (req, res) => {
    staffViewController.remove(req, res);
})

export default router;