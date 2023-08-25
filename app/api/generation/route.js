const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req) {
  const value = await req.json();
  console.log(value);

  try {
    const response = await openai.createImage({
      prompt: value.message,
      n: 8,
      size: "1024x1024",
    });
    const imageUrl = response.data;

    return new Response(JSON.stringify({ imageUrl }));
  } catch (error) {
    console.error("Error", error);
  }
}
