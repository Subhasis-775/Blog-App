import express from 'express'
import { deleteArticle, getArticleById, getArticles, postArticle, updateArticle } from '../controllers/articleControllers.js';
const router=express.Router();
// get all articles
router.get('/',getArticles);
// get single artice
router.get("/:id",getArticleById)
// create new article
router.post("/",postArticle)
// update post
router.put("/:id",updateArticle);
// delete post
router.delete('/:id',deleteArticle)
export default router;
