const db = require("../models");
const User = db.user

exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.json({
            message: "register berhasil.",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (req.body.password == user.password) {
            res.status(200).json({
                message: "login berhasil",
                data: user
            })
        } else {
            res.status(200).json({
                "message": "password yang anda masukkan salah"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByPk(id, { rejectOnEmpty: true })

        res.json({
            message: `User retrieved successfully with id=${id}.`,
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving user",
            data:null,
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const user = await User.findAll()
        res.json({
            message: 'User retrieved successfully.',
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data:null,
        });
    }
}

// Mengubah data sesuai id yang dikirimkan
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByPk(id, { rejectOnEmpty: true })
        user.update(req.body,{
            where:{id}
        })
        res.json({
            message: 'User with updated successfully.',
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving user",
            data:null,
        });
    }
}

// Menghapus data sesuai id yang dikirimkan
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByPk(id, { rejectOnEmpty: true })

        user.destroy()

        res.json({
            message: 'User deleted successfully.',
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving user",
            data:null,
        });
    }
}
