import { ragServicePipeline } from "./rag/rag.service.js";

export default async function uploadService(filePath) {

    await ragServicePipeline(filePath);

}