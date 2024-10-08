import { connectDb } from "@/utils/database";
import { Prompt } from "@/models/prompt";

export const GET = async (request: Request) => {
  try {
    await connectDb();
    const prompts = await Prompt.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify({ prompts: prompts }));
  } catch (error) {
    console.log("Error fetching all Prompts : ", error);
    return new Response("Error fetching all Prompts", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    await connectDb();
    const { authorName, email, prompt, tag } = await request.json();
    if (!authorName || !email || !prompt || !tag)
      return new Response("Some fields are missing", { status: 400 });

    const newPrompt = await Prompt.create({
      authorName: authorName,
      email: email,
      prompt: prompt,
      tag: tag,
    });

    return new Response(
      JSON.stringify({
        message: "Prompt created successfully.",
        newPrompt: newPrompt,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log("Error creating Prompt : ", error);
    return new Response("Error creating Prompt", { status: 500 });
  }
};
