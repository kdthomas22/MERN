import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

// sets up a call back function to be executed when a user visits localhost:5000/
router.get("/", getPosts);

router.post("/", createPost);

router.patch("/:id", updatePost);

router.delete("/:id", deletePost);

router.patch("/:id/likePost", likePost);

export default router;
