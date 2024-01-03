import express from "express";
import { viewAll, viewOne, create, update, remove } from "../controllers/index";

const router = express.Router();

router.get("/users", viewAll);
router.get("/users/:id", viewOne);
router.post("/newUser", create);
router.put("/user/:id", update);
router.delete("/user/:id", remove);

export default router;
