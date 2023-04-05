const db = require("../models");
const news = require("../models/news");
const News = db.news

exports.create = async (req, res) => {
    try {
        const news = await  News.create(req.body)
        res.json({
            message: "post berhasil.",
            data: news,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const news = await News.findByPk(id, { rejectOnEmpty: true })

        res.json({
            message: `News retrieved successfully with id=${id}.`,
            data: news,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving news",
            data:null,
        });
    }
}

exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const news = await News.findAll({
        where: {
            kategori: id
        }
    })
    res.json({
        message: `News retrieved successfully with categoryId=${id}.`,
        data: news,
    });
}

exports.getAll = async (req, res) => {
    try {
        const news = await News.findAll()
        res.json({
            message: 'News retrieved successfully.',
            data: news,
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
        const news = await News.findByPk(id, { rejectOnEmpty: true })
        news.update(req.body,{
            where:{id}
        })
        res.json({
            message: 'News with updated successfully.',
            data: news,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving news",
            data:null,
        });
    }
}

// Menghapus data sesuai id yang dikirimkan
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const news = await News.findByPk(id, { rejectOnEmpty: true })

        news.destroy()

        res.json({
            message: 'News deleted successfully.',
            data: news,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving news",
            data:null,
        });
    }
}
