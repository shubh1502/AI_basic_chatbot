import express from 'express';
import chat from '../controllers/chat.controller.js';
// import chat from '../controllers/chat.controller_with_chat_history.js';

const router = express.Router();

router.post('/', chat);

export default router;
