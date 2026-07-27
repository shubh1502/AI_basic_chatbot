import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { splitDocuments } from "./splitter.services.js";
import { createVectorStore } from "./vectordb.services.js";

export async function loadPDF(filePath) {
  const loader = new PDFLoader(filePath);

  const docs = await loader.load();

  const chunks = await splitDocuments(docs);

  const vectorStore = await createVectorStore(chunks);  
//   console.log(chunks);

  const results = await vectorStore.similaritySearch("What is the purpose of this document?", 1);
  console.log(results); 
}

loadPDF("../dummy_data/dummy_pdf_multipage.pdf");