import {loadPDF} from "../loader/loader.js";
import { splitDocuments } from "./rag/splitter.service.js";
import { createVectorStore } from "./rag/vectordb.service.js";


export async function ragservicepipeline(filePath) {
  const docs = await loadPDF(filePath);


  const chunks = await splitDocuments(docs);

  const vectorStore = await createVectorStore(chunks);  
//   console.log(chunks);

  const results = await vectorStore.similaritySearch("What is the purpose of this document?", 1);
  console.log(results); 
}

loadPDF("../dummy_data/Dummy_pdf.pdf");