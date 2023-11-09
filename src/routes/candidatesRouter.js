import { Router } from "express";
import candidatesViewController from "../controllers/candidates/candidatesViewController.js";
import {isAuthenticated, isAdmin} from "../middlewares/authMiddleware.js";

const router = Router();
router.get("/new", isAuthenticated, candidatesViewController.createForm);

router.post("/", isAuthenticated, (req,res)=>{
    candidatesViewController.create(req,res);
});


router.get("/:id/edit", isAuthenticated, isAdmin,  candidatesViewController.updateForm);

router.get("/:id/delete",isAuthenticated, isAdmin, (req,res)=>{
    candidatesViewController.remove(req,res);
});
router.post("/:id", isAuthenticated, isAdmin, (req,res)=>{
    candidatesViewController.update(req,res);
});


router.get("/:id", isAuthenticated, (req,res)=>{
    candidatesViewController.getCandidatesByIdView(req,res);
});

router.get("/", isAuthenticated, (req,res)=>{
    candidatesViewController.getAllCandidatesView(req,res);
});




export default router;
