const express = require('express')
const path = require('path')
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://lovepreetchopra:JERRY0811ISHU@mongoyoutube.qfmodgb.mongodb.net/DanceAcademy');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}  
const port = 8000;

const contactFormSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

  var contactForm = mongoose.model('contactForm', contactFormSchema);

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const params = { }
    res.status(200).render('home.pug', params);
});

app.get('/about', (req, res) => {
    const params = { }
    res.status(200).render('about.pug', params);
});

app.get('/services', (req, res) => {
    const params = { }
    res.status(200).render('services.pug', params);
});

app.get('/classInfo', (req, res) => {
    const params = { }
    res.status(200).render('classInfo.pug', params);
});

app.get('/contact', (req, res) => {
    const params = { }
    res.status(200).render('contact.pug', params);
});

app.post('/contact', (req, res) => {
    var myData = new contactForm(req.body)
    // myData.save();
    myData.save().then(() => {
        res.send("this item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the database")
    })
    // res.status(200).render('contact.pug');
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})