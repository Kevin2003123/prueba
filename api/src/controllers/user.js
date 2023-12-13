const { User } = require('../db');


const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        const deletedUser = await user.update({
            state: false,
        });

        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertUser = async (req, res) => {
    try {
        const { name, isAdmin, password } = req.body
        const user = await User.create({ name, isAdmin, password });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const { isAdmin } = req.body;
        if (typeof isAdmin !== "boolean") {
            res.status(500).json({ error: "Missing a value" });
        }

        const user = await User.findByPk(id);

        await user.update({ isAdmin });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const fillUser = async (User) => {
    try {
        await User.bulkCreate([
            { name: "Kevin", isAdmin: true, password: "123" },
            { name: "Ludovino", isAdmin: true, password: "123" },
            { name: "Cesar", isAdmin: true, password: "123" }
        ]
        );
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = { getUsers, deleteUser, insertUser, updateUser, fillUser };