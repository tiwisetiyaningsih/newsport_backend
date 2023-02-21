const db = require("../models");
const News = db.news

exports.create = async (req, res) => {
    try {
        const news = await  News.create(req.body)
        res.json({
            message: "upload berhasil.",
            data: news,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}
