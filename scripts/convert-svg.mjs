import fs from "fs";
import { transform } from "@svgr/core";

(async () => {
  //ensure the jsx folder exists
  if (!fs.existsSync("./src")) {
    fs.mkdirSync("./src");
  }
  //read all files from the /svg folder
  const files = fs.readdirSync("./svg");
  //loop through all files
  for (const file of files) {
    //read the file
    const data = fs.readFileSync(`./svg/${file}`);

    if (data.byteLength === 0) {
      continue;
    }

    //convert the file to jsx
    try {
      const componentName = file
        .replace(".svg", "")
        .replace(/0/g, "Zero-")
        .replace(/1/g, "One-")
        .replace(/2/g, "Two-")
        .replace(/3/g, "Three-")
        .replace(/4/g, "Four-")
        .replace(/5/g, "Five-")
        .replace(/6/g, "Six-")
        .replace(/7/g, "Seven-")
        .replace(/8/g, "Eight-")
        .replace(/9/g, "Nine-")
        .split("-")
        .map((part) =>
          part
            .split("")
            .map((p, i) => (i === 0 ? p.toUpperCase() : p.toLowerCase()))
            .join("")
        )
        .join("");

      const code = await transform(
        data,
        {
          typescript: true,
          dimensions: true,
          svgoConfig: {
            removeDimensions: true,
          },
          plugins: [
            "@svgr/plugin-svgo",
            "@svgr/plugin-jsx",
            "@svgr/plugin-prettier",
          ],
        },
        { componentName }
      );

      //write the jsx file to the /src folder
      fs.writeFileSync(`./src/${file.replace("svg", "tsx")}`, code);
    } catch (err) {
      //log out the error for the file name
      console.log(`Error converting ${file}`, err);
    }
  }
})();
