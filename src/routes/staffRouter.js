import { Router } from "express";
import staffViewCrontroller from "../controllers/staff/staffViewCrontroller.js";
const router = Router(); /* 
router.get("/new", candidatesViewController.createForm);

router.post("/",(req,res)=>{
    candidatesViewController.create(req,res);
});


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
    staffViewCrontroller.getAllStaffView(req,res);
});




export default router;
