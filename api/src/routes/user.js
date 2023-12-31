const { Router } = require("express");
const router = Router();
const { getUsers, insertUser, updateUser, deleteUser } = require("../controllers/user")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/users", getUsers);
router.post("/user", insertUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)
module.exports = router;