import dotenv from "dotenv";
dotenv.config();
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

const embeddingModel = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HUGGINGFACE_API_KEY,
  model: "BAAI/bge-small-en-v1.5",
});


console.log("HuggingFace API Key:", process.env.HUGGINGFACE_API_KEY);

let vectorStore = null;

export async function createVectorStore(chunks) {
  vectorStore = await MemoryVectorStore.fromDocuments(
    chunks,
    embeddingModel
  );

  return vectorStore.asRetriever();
}
