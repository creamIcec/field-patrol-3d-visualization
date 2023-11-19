const fs = require("fs");

const akPath = "./ak.txt";
const filePath = "./src/AkContainer.js";  //TODO validate whether path is accessible in build env

let ak;

const akData = fs.readFileSync(akPath, 'utf8');
let lines = akData.split('\n');
ak = lines[0];

const akContainer =  fs.readFileSync(filePath, 'utf8');
lines = akContainer.split('\n');
let firstLine = lines[0];
let newLine = firstLine.slice(0, 8) + " '" + ak + "';";
lines[0] = newLine;
let newText = lines.join("\n");
fs.writeFile(filePath, newText, function (err) {
    if (err) {
        return console.log(err);
    }
});