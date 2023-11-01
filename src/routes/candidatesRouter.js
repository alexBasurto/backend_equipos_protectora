import { Router } from "express";
import candidatesViewController from "../controllers/candidates/candidatesViewController.js";

const router = Router();

router.get("/",(req,res)=>{
    candidatesViewController.getAllCandidatesView(req,res);
});
router.get("/:id",(req,res)=>{
    candidatesViewController.getCandidatesByIdView(req,res);
});
router.post("/:id",(req,res)=>{
    candidatesViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    candidatesViewController.remove(req,res);
});




router.get("/:id/edit", candidatesViewController.updateForm);

export default router;
