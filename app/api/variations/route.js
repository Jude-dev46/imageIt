const fs = require("fs");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req) {
  const value = await req.json();
  const imageFile = value.message.message;

  try {
    const response = await openai.createImageVariation(
      fs.createReadStream(`public/${imageFile}`),
      2,
      "1024x1024"
    );
    const image = await response.json();
    console.log(image);

    return new Response({ message: successful });
  } catch (err) {
    console.error(err);
  }
}
