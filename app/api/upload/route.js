// import formidable from "formidable";
const fs = require("fs");

export async function POST(req) {
  const form = await req.formData();
  const [entry] = form;

  const name = entry[0];
  const file = entry[1];

  fs.writeFile(`public/${file.name}`, "This is an image file", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("File written successfully");
    console.log("The written has the following contents:");

    fs.readFileSync(`public/${file.name}`, { encoding: "base64" });
  });

  return new Response(JSON.stringify({ message: file.name }), {
    headers: { "Content-Type": "application/json" },
  });
}
