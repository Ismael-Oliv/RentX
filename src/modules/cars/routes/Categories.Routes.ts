import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../useCases/createCategory";
import { importCategoryController } from "../useCases/importCategory";
import { listCategoriesController } from "../useCases/listCategories";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { CategoriesRoutes };
