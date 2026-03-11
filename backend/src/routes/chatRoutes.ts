import express from "express";
import { sendMessage } from "../controllers/chatControllers";

const router = express.Router();

router.post("/chat", sendMessage);

export default router;
