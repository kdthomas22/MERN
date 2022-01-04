import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// sets up a call back function to be executed when a user visits localhost:5000/
router.get("/", getPosts);

router.post("/", createPost);

export default router;
