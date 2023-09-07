
    const blogPost = [];

    const createPost = async (post) => {
    const postExist = blogPost.find((element) => element.post === post);
    if (postExist) {
        return {
            status: 'error',
            code: 409,
            message: 'Post already exists',
            data: null,
        };
    }
    blogPost.push(post);
    return {
        status: 'success',
        code: 200,
        message: 'Post added successfully',
        data: post,
    };
};

    const updatePost = async (postId, updatedPost) => {
    const postIndex = blogPost.findIndex((post) => post.id == postId);
    if (postIndex === -1) {
        return {
            status: 'error',
            code: 404,
            message: 'Post not found',
            data: null,
        };
    }
    blogPost[postIndex] = { ...blogPost[postIndex], ...updatedPost };
    return {
        status: 'success',
        code: 200,
        message: 'Post updated successfully',
        data: blogPost[postIndex],
    };
};

    const deletePost = async (postId) => {
    const postIndex = blogPost.findIndex((post) => post.id == postId);
    if (postIndex === -1) {
        return {
            status: 'error',
            code: 404,
            message: 'Post not found',
            data: null,
        };
    }
    const deletedPost = blogPost.splice(postIndex, 1)[0];
    return {
        status: 'success',
        code: 200,
        message: 'Post deleted successfully',
        data: deletedPost,
    };
};

    const getPost = async () => {
    return {
        status: 'success',
        code: 200,
        message: 'Posts retrieved successfully',
        data: blogPost,
    };
};

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPost,
};

