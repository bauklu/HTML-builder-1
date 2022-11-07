const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, 'secret-folder');


fs.readdir(source, (err, files) => {
    files.forEach(file => {
        let pathF = path.join(source, file);
        fs.stat(pathF, (err, stats) => {
            if (err) {
                console.error(err);
                return;
            } else if (stats.isDirectory()) {
                return;
            } else {
                let res = file.split('.').slice(0).join('-');
                res = res + '-' + stats.size + 'b';
                console.log(res);
            };
        });
    });
});

