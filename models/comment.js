module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comment', {
        usercomment: {
            type: Sequelize.STRING,
        },
        comment: {
            type: Sequelize.STRING,
        },
    });
    return Comment; 
}