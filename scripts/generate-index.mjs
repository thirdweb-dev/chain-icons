import fs from "fs";

(async () => {
  //load all files from the ./jsx directory and export them from the index.ts file
  const files = await fs.promises.readdir("./src");
  const jsxFiles = files.filter((file) => file.endsWith(".tsx"));
  const index = `${jsxFiles
    .map((file) => {
      const componentName = file
        .replace(".tsx", "")
        .split("-")
        .map((part) =>
          part
            .split("")
            .map((p, i) => (i === 0 ? p.toUpperCase() : p.toLowerCase()))
            .join("")
        )
        .join("")
        .replace(/[0-9]/g, "");
      return `export { default as ${componentName} } from "./${file.replace(
        ".tsx",
        ""
      )}";`;
    })
    .join("\n")}`;
  await fs.promises.writeFile("./src/index.ts", index);
})();
