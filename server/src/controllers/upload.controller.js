import uploadService from "../services/upload.service.js";

export default async function uploadController(req, res) {
    try {

        await uploadService(req.file.path);

        return res.status(200).json({
            success: true,
            message: "PDF indexed successfully."
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Upload failed."
        });
    }
}