import { Router } from "express";
import adoptionsViewController from "../controllers/adoptions/adoptionsViewController.js";

const router = Router(); 
router.get("/new", adoptionsViewController.createForm);

router.post("/",(req,res)=>{
    adoptionsViewController.create(req,res);
});

/* 
router.get("/:id/edit", candidatesViewController.updateForm);

router.get("/:id/delete",(req,res)=>{
    candidatesViewController.remove(req,res);
});
router.post("/:id",(req,res)=>{
    candidatesViewController.update(req,res);
});


router.get("/:id",(req,res)=>{
    candidatesViewController.getCandidatesByIdView(req,res);
}); */

router.get("/",(req,res)=>{
    adoptionsViewController.getAllAdoptionsView(req,res);
});




export default router;
