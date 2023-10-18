const fs = require("fs");
const path = require("path");

const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ key: apiKey });

export async function POST(req) {
  const value = await req.json();

  const imagePath = path.join(process.cwd(), "public", value.message);

  try {
    const response = await openai.images.edit({
      image: fs.createReadStream(imagePath),
      n: 4,
      size: "1024x1024",
      prompt: "A cute baby sea otter wearing a beret",
    });
    const images = response.data;

    return new Response(
      JSON.stringify({
        status: true,
        message: "successfully edited",
        data: images,
      })
    );
  } catch (err) {
    console.log("Error:", err);
    return new Response(
      JSON.stringify({
        status: "error",
        message: "An error occurred",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
