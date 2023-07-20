//Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//Use pug
app.set('view engine', 'pug');

//Use static files
app.use(express.static('public'));

//Require data
const projectData = require('./data.json');

//Create routes
app.get('/', (req, res) => {
	res.render('index', { projectData });
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/project/:id', (req, res) => {
	const id = req.params.id;
	const project = projectData.projects[id];
	res.render('project', { project });
});

//Start server
app.listen(3000, () => {
	console.log('The application is running on localhost:3000!');
});