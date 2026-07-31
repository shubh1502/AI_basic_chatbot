import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function loadPDF(filePath) {
    let docs = [];
    try {

        const loader = new PDFLoader(filePath);
         docs = await loader.load();

    } catch (error) {
        console.error("Error loading PDF:", error.message);
    } finally {
        console.log(docs);
        console.log("type of docs:", typeof docs);
    }

    return docs;
}