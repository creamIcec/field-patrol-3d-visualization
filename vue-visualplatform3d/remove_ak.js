const fs = require("fs");

const filePath = "./src/AkContainer.js";  //TODO validate whether path is accessible in build env

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    let lines = data.split('\n');
    let firstLine = lines[0];
    let newLine = firstLine.slice(0, 8) + " '';";
    lines[0] = newLine;
    let newText = lines.join("\n");
    fs.writeFile(filePath, newText, function (err) {
      if (err) {
        return console.log(err);
      }
    });
});