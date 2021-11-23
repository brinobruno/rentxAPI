import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

import { CreateCategoryController } from "src/modules/cars/useCases/createCategory/CreateCategoryController";

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)

export { router }