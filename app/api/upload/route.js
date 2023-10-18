const fs = require("fs");
const path = require("path");

export async function POST(req) {
  const form = await req.formData();
  const file = form.get("file");

  if (!file) {
    return Response.json({
      status: false,
      message: "No file uploaded!",
      data: "",
    });
  }

  if (file.type !== "image/png") {
    return Response.json({
      status: false,
      message: "Invalid. Upload a png file!",
      data: "",
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  fs.writeFile(
    path.join(__dirname, "../../../../../public", file.name),
    buffer,
    (err, data) => {
      if (err) {
        console.log("error", err);
      }
    }
  );

  const filePath = path.join(__dirname, "../../../../../public", file.name);

  return Response.json({
    status: true,
    message: "Successfully uploaded image!",
    imageUrl: filePath,
    imageName: file.name,
  });
}
