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
                "message": "login berhasil"
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