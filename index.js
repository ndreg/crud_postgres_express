const express = require('express');
const path = require('path');
const app = express();
const users = require('./routes/customerRoute');

app.use(express.urlencoded({extended: true}))
app.set('PORT', 3001);
app.set('TITLE', 'Express+Postgres App');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))
app.use(users)

app.get('/', (req, res) => {
	res.render('index', {title: app.get('TITLE')})
});


app.listen(app.get('PORT'), () => console.log('Knock Knock I\'m on the road!'))
