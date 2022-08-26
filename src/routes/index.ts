import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

export const router = Router();

const ROUTES = {
  CATEGORIES: "/categories",
  SPECIFICATIONS: "/specifications",
};

router.use(ROUTES.CATEGORIES, categoriesRoutes);
router.use(ROUTES.SPECIFICATIONS, specificationsRoutes);
