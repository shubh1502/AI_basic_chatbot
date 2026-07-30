export async function similaritySearch(query, k = 3) {
  if (!vectorStore) {
    throw new Error("Vector Store not initialized");
  }

  return await vectorStore.similaritySearch(query, k);
}