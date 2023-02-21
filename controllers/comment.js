const db = require("../models");
const Comment = db.comment

exports.create = async (req, res) => {
    try {
        const comment = await  Comment.create(req.body)
        res.json({
            message: "comment berhasil.",
            data: comment,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}
