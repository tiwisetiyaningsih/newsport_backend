const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const userRoute = require('./router/user')
const commentRoute = require('./router/comment')
const newsRoute = require('./router/news')



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Newsport API by Tiwi');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use('/api/user', userRoute)
app.use('/api/comment', commentRoute)
app.use('/api/news', newsRoute)



app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));