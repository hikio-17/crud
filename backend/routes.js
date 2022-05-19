const router = require("express").Router();
const productController = require("./controller");

router.get("/", productController.index);
router.get("/:id", productController.view);
router.post("/", productController.store);
router.put("/:id", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;
