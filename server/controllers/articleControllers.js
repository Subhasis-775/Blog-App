import Article from "../models/article.js";
// get all article
export const getArticles=async(req,res)=>{
    try{
        const artice=await Article.find();
        res.status(200).json(artice);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
export const getArticleById=async(req,res)=>{
    try{
        const artice=await Article.findById(req.params.id);
        if(!artice) res.status(404).json(`the article with id${id} not found`);
        res.status(200).json(artice)
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
export const postArticle=async(req,res)=>{
    const {title,content,author}=req.body;
    const newArticle=new Article({title,content,author});
    try{
        const savedArticle=await newArticle.save();
        res.status(201).json(savedArticle);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
export const updateArticle=async(req,res)=>{
    try{
    const updatedArticle=await Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    if(!updateArticle) res.status(404).json(`the article with id${req.params.id} not found`);
    else res.status(200).json(updatedArticle)
    }
    catch(err){
       res.status(500).json({message:err.message});
    }
};
export const deleteArticle=async(req,res)=>{
    try{
    const deletedArticle=await Article.findByIdAndDelete(req.params.id);
    if(!deleteArticle){
        res.status(404).json(`the article with id${req.params.id} not found`);
    }
    res.json({message:"article deleted successflly"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
