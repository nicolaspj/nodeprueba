import express from "express"
import denunciasCtrl from "./denuncias.controller.js"
const router = express.Router()

router.route("/").get((req,res) => res.send("hola ki ace"))
/*
router.get(denunciasCtrl.getDenuncias)
router.post(denunciasCtrl.postDenuncias)
router.put(denunciasCtrl.putDenuncias)
router.delete(denunciasCtrl.deleteDenuncias)
*/ 
export default router 