import fs from "fs";
import sharp from "sharp";

const pngOutDir = "./png";

(async () => {
  //ensure the jsx folder exists
  if (!fs.existsSync("./src")) {
    fs.mkdirSync("./src");
  }
  //read all files from the /svg folder
  const files = fs.readdirSync("./svg");

  // ensure ./png exists
  if (!fs.existsSync(pngOutDir)) {
    fs.mkdirSync(pngOutDir);
  }

  //loop through all files and convert them to png at different sizes
  for (const file of files) {
    // make the folder based on the file name
    const folder = file.replace(".svg", "");
    const folderPath = `${pngOutDir}/${folder}`;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    // resize to multiple sizes
    sharp(`./svg/${file}`)
      .resize({
        fit: "contain",
        width: 16,
        height: 16,
        background: "transparent",
      })
      .toFile(`${folderPath}/16.png`);
    sharp(`./svg/${file}`)
      .resize({
        fit: "contain",
        width: 32,
        height: 32,
        background: "transparent",
      })
      .toFile(`${folderPath}/32.png`);
    sharp(`./svg/${file}`)
      .resize({
        fit: "contain",
        width: 64,
        height: 64,
        background: "transparent",
      })
      .toFile(`${folderPath}/64.png`);
    sharp(`./svg/${file}`)
      .resize({
        fit: "contain",
        width: 128,
        height: 128,
        background: "transparent",
      })
      .toFile(`${folderPath}/128.png`);
    sharp(`./svg/${file}`)
      .resize({
        fit: "contain",
        width: 256,
        height: 256,
        background: "transparent",
      })
      .toFile(`${folderPath}/256.png`);
    sharp(`./svg/${file}`)
      .resize({
        fit: "contain",
        width: 512,
        height: 512,
        background: "transparent",
      })
      .toFile(`${folderPath}/512.png`);
  }
})();
