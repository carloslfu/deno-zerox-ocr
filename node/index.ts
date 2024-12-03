import dotenv from "dotenv";
import { zerox } from "zerox";

dotenv.config();

const openaiAPIKey = process.env.OPENAI_API_KEY;

if (!openaiAPIKey) {
  throw new Error("OPENAI_API_KEY is not set");
}

async function main() {
  const result = await zerox({
    filePath: "https://omni-demo-data.s3.amazonaws.com/test/cs101.pdf",
    openaiAPIKey,
  });

  console.log(result);
}

main();
