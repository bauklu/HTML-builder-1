const fs = require('fs');
const path = require('path');
const input = path.join(__dirname, 'template.html');

fs.readFile(input, "utf8", function (error, data) {

    let header = "Главная страница";
    let articles = "Изучаем Node.js";
    let footer = "Футер";


    data = data.replace("{header}", header).replace("{articles}", articles).replace("{footer}", footer);
});