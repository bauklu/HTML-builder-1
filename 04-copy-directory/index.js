const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, 'files');
const sourceN = path.join(__dirname, 'files-copy');

fs.access(sourceN, function (error) {
    if (error) {
        console.log("Directory does not exist")
        fs.mkdir(sourceN, err => {
            if (err) throw err;
            console.log("Directory is created");
            getCurrentFiles();
        });
    } else {
        console.log("Directory exists")
        getCurrentFiles();
    }
})


function getCurrentFiles() {
    fs.readdir(source, (err, files) => {
        files.forEach(file => {
            let pathF = path.join(source, file);
            let pathFN = path.join(sourceN, file);
            fs.copyFile(pathF, pathFN, (err) => {
                if (err) {
                    console.error(err);
                    return;
                } else {
                    console.log('success');
                };
            });
        });
    });

}

// function copyFileSync(srcFile, destFile, encoding) {
//     let content = fs.readFileSync(srcFile, encoding);
//     fs.writeFileSync(destFile, content, encoding);
// };

// let { COPYFILE_EXCL } = fs.constants;
// fs.copyFile(source, sourceN, COPYFILE_EXCL, err => {
//     if (err) throw err; // не удалось скопировать файл. Он уже существует?
//     console.log('Файл успешно скопирован');
// });
// fs.copyFile(source, sourceN, err => {
//     if (err) throw err; // не удалось скопировать файл
//     console.log('Файл успешно скопирован');
// });
