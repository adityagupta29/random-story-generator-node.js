const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    res.send(getRandomPass());
})

app.listen(3000);

const getRandomPass = () => {
    const start = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const characters = ["/", ".", "?", "[", "]", ","]
    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"]

    const getRandomValue = (array) => {
        return array[Math.floor(Math.random() * array.length)]
    };

    var randomString = '';
    for(i=0; i<6; i+1){
        randomString = randomString + randomString;

        randomString = getRandomValue(start) + getRandomValue(characters) +
        getRandomValue(alphabets);
    }

    return randomString;
};

