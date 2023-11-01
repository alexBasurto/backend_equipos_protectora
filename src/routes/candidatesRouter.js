import { Router } from "express";
import candidatesViewController from "../controllers/candidates/candidatesViewController.js";

const router = Router();

router.get("/",(req,res)=>{
    candidatesViewController.getAllCandidatesView(req,res);
});

export default router;
