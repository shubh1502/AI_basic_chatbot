import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export async function splitDocuments(documents) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const chunks = await splitter.splitDocuments(documents);

  console.log("Chunks:", chunks);
  console.log("Number of chunks:", chunks.length);

  return chunks;
} 