
   const express = require('express');
   const blogs = require('./src/routes/blog');
   const server = express();

   server.use(express.json());
   server.use(express.urlencoded({ extended: true }));

   const PORT = 5500;

   server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });

   server.use('/blog', blogs);

  // DELETE request handler for the /blog route
   server.delete('/blog/:id', (req, res) => {
      const blogIdToDelete = req.params.id;
      // Assuming you have some logic to delete a blog post by its ID
      // You can replace this with your actual delete logic
      // For now, let's send a response indicating success
      res.status(204).send();
  });

   module.exports = server;











//    const express = require('express')
//    const blogs = require('./src/routes/blog')
//    const server = express();
  
//    server.use(express.json())
//   server.use(express.urlencoded({ extended: true }));
  
//   const PORT = 5500;
  
//    server.listen(PORT, () => {
//        console.log(`Server running on port ${PORT}`);
  
//    });
  
//    server.use('/blog', blogs)
  
//    module.exports = server;
  