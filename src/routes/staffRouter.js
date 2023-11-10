 import { Router } from "express";

import staffViewController from "../controllers/staff/staffViewController.js";
import {isAuthenticated, isAdmin} from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, (req, res) => {
    staffViewController.getAll(req, res);
});

router.get("/new", isAuthenticated, staffViewController.createForm);

router.get("/:id", isAuthenticated, (req, res) => {
    staffViewController.getById(req, res);
});

router.post("/", isAuthenticated, (req, res) => {
    staffViewController.create(req, res);
});

router.get("/:id/edit", isAuthenticated, isAdmin, staffViewController.updateForm);

router.post("/:id",isAuthenticated, isAdmin, (req, res) => {
    staffViewController.update(req, res);
});

router.get("/:id/delete", isAuthenticated, isAdmin, (req, res) => {
    staffViewController.remove(req, res);
})

export default router;