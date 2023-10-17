const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ key: apiKey });

export async function POST(req) {
  const value = await req.json();

  try {
    const response = await openai.images.generate({
      prompt: value.message,
      n: 6,
      size: "1024x1024",
    });

    const imageUrl = response.data;

    return new Response(
      JSON.stringify({
        status: "success", // Change to "success"
        message: "Successful!",
        data: imageUrl,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
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
