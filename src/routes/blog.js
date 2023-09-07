
 const express = require('express');
 const controllers = require('../controllers/blog-controller');

 const router = express.Router();

 router.post('/', controllers.addPost);
 router.get('/', controllers.getPost);
 router.put('/:postId', controllers.updatePost);
 router.delete('/:postId', controllers.deletePost);
 
 module.exports = router;
