const { Router } = require("express");
const router = Router();
const { getContacts, insertContact, updateContact, deleteContact, getContactById } = require("../controllers/contact")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/all", getContacts);
router.get("/:id", getContactById)
router.post("/create", insertContact);
router.put("/update", updateContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;