
const services = require('../services/blog-services');

const addPost = async (req, res, next) => {
    try {
        const post = await services.createPost(req.body);
        return res.status(post.code).json(post);
    } catch (error) {
        next(error);
    }
};

const getPost = async (req, res, next) => {
    try {
        const postsinfo = await services.getPost();
        return res.status(postsinfo.code).json(postsinfo);
    } catch (error) {
        next(error);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const { postId } = req.params;
        const updatedPost = req.body;
        const result = await services.updatePost(postId, updatedPost);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const { postId } = req.params;
        const result = await services.deletePost(postId);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addPost,
    getPost,
    updatePost,
    deletePost,
};
