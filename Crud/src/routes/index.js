import { Router } from "express";
import { Implements } from "../controllers/implements.js";

const router = Router()

router.get('/deportek', Implements.get)
router.post('/deportek', Implements.post)
router.put('/deportek', Implements.put)
router.delete('/deportek', Implements.delete)

export default router