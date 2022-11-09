const process = require('process');
const fs = require('fs');
const path = require('path');
const dest = path.join(__dirname, 'destination.txt');
const output = fs.createWriteStream(dest);
const { stdin, stdout } = process;

stdout.write("Привет! Введите текст. Для выхода введите 'ctrl+c' или 'exit' \n ");
stdin.on('data', function (date) {

    process.on('SIGINT', () => {

        stdout.write('Вы нажали Ctrl+c. Запись завершена \n ');
        process.exit(1);
    });


    let chunk = Buffer.from(date, 'utf-8').toString();
    if (chunk.trim() === "exit") {
        stdout.write('Вы нажали Exit. Запись завершена \n ');
        process.exit();
    } else {
        output.write(chunk);
    }
});

