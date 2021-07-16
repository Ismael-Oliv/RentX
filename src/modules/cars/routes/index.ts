import { Router } from "express";

import { CategoriesRoutes } from "./Categories.Routes";
import { SpecificationsRoutes } from "./Specifications.Routes";

const router = Router();

router.use("/categories", CategoriesRoutes);
router.use("/specifications", SpecificationsRoutes);

export { router };
