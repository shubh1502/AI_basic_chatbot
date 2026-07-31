import dotenv from "dotenv";
dotenv.config();

import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

const embeddingModel = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HUGGINGFACE_API_KEY,
  model: "BAAI/bge-small-en-v1.5",
});

let vectorStore = null;

export async function createVectorStore(chunks) {
  vectorStore = await MemoryVectorStore.fromDocuments(
    chunks,
    embeddingModel
  );
}

export async function similaritySearch(query, k = 3) {

  if (!vectorStore) {
    throw new Error("Vector Store not initialized");
  }

  return vectorStore.similaritySearch(query, k);
}