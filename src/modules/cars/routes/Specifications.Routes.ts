import { Router } from "express";
import { createSpecificationController } from "../useCases/createSpecification";

const SpecificationsRoutes = Router();
SpecificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { SpecificationsRoutes };
