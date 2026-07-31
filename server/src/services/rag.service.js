import {loadPDF} from "../loader/loader.js";
import { chunkDocuments } from "./rag/editor.service.js";
import { createVectorStore } from "./rag/vectordb.service.js";


export async function ragservicepipeline(filePath) {
  const docs = await loadPDF(filePath);


  const chunks = await chunkDocuments(docs);

  const retriever = await createVectorStore(chunks);  
//   console.log(chunks);
return retriever;

}

console.log(await ragservicepipeline("../dummy_data/Dummy_pdf.pdf")); 