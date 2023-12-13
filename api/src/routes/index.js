const { Router } = require("express");

const userRoutes = require("./user");
const contactRoutes = require("./contact");
const router = Router();

router.use("/", userRoutes);
router.use("/contact", contactRoutes);


module.exports = router;