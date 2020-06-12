const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const apiKey = 'f9d6325a2e46700a222004321dba33c5' // api key of openWeather.org
app.get('/', (req, res) => {
    // res.send('hello')
    res.render('index', { weather: null, weatherVN: null, error: null })
})

app.post('/', (req, res) => {

    console.log(req.body.city);
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    request(url, (err, response, body) => {
        if (err) {
            res.render('index', { weather: null, error: 'Error, please try again' });
        } else {
            // console.log('response: ' + response)
            // console.log('body: ' + body);
            let weather = JSON.parse(body);
            console.log(weather);
            if (weather.main == undefined) {
                res.render('index', { weather: null, error: 'Error, please try again' });
            } else {
                let celsius = (weather.main.temp - 32) / 1.8;
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                let weatherVNText = `It's ${celsius} *C in ${weather.name}!`;
                res.render('index', { weather: weatherText, weatherVN: weatherVNText, error: null });
            }
        }


    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})