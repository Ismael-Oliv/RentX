import { Request, Response } from "express";
import {} from "../createCategory/index";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  public handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();
    return response.json(categories);
  }
}
