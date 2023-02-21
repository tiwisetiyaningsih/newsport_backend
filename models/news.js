module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define('news', {
        judul: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING,
        },
        news: {
            type: Sequelize.STRING,
        },
    });
    return News; 
}