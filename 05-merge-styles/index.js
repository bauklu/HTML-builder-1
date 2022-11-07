const fs = require('fs');
const path = require('path');
const pStyles = path.join(__dirname, 'styles');
const pBundle = path.join(__dirname, 'project-dist', 'bundle.css');
const output = fs.createWriteStream(pBundle);

let data = '';
fs.readdir(pStyles, (err, files) => {
    files.forEach(file => {
        let res = file.split('.').slice(1);
        if (res == 'css') {
            let patF = path.join(pStyles, file);
            let input = fs.createReadStream(patF, 'utf-8');
            input.on('data', chunk => output.write(chunk));
            console.log('Data has been added!');
        }

        // return;
    });
});



