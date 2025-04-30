const fs = require("node:fs");

fs.readFile("support_files/support_file.txt", "utf8", (err, data) => {
  if (err) {
    console.log("erro identificado na leitura do arquivo: ", err);
    return;
  }

  console.log(data);
});
