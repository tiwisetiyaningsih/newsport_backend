module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define('news', {
        judul: {
            type: Sequelize.STRING,
        },
        kategori: {
            type:Sequelize.STRING,
        },
        news: {
            type: Sequelize.STRING,
        },
    });
    return News; 
}