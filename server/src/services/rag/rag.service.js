import {loadPDF} from "../../loader/loader.js";
import { chunkDocuments } from "./editor.service.js";
import { createVectorStore } from "./vectordb.service.js";


export async function ragservicepipeline(filePath) {
  const docs = await loadPDF(filePath);


  const chunks = await chunkDocuments(docs);

  const retriever = await createVectorStore(chunks);  
  console.log("Vector Store Initialized");

}

// console.log(await ragservicepipeline("../dummy_data/Dummy_pdf.pdf")); 