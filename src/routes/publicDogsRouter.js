import { Router } from "express";
import publicViewController from "../controllers/dogsPublic/publicViewController.js"

const router = Router();

router.get("/",(req,res)=>{
    publicViewController.getPublicDogsView(req,res);
});




export default router;
