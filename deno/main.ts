import { zerox } from "npm:zerox";

const openaiAPIKey = Deno.env.get("OPENAI_API_KEY");

if (!openaiAPIKey) {
  throw new Error("OPENAI_API_KEY is not set");
}

const result = await zerox({
  filePath: "https://omni-demo-data.s3.amazonaws.com/test/cs101.pdf",
  openaiAPIKey,
});

console.log(result);
