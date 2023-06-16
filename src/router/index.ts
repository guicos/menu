import { Router } from "express";
import { controller } from "../controller";

const router: Router = Router()

//Routes
router.get("/:id", controller.menu);

export { router };