import express from "express";
import { getAllUsers } from "../controllers/dev.controller.js";

const router = express.Router()

router.get('/users', getAllUsers)

export default router