const path = require('path');
const jsonServer = require('json-server');

const port = parseInt(process.env.PORT, 10) || 3002;
const database = path.resolve(__dirname, '..', 'static', 'data', 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(database);
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.bodyParser);

const copyImagesToStatic = (req, res, next) => {
  // Get the WYSIWYG data.
  const { body } = req.body;
};

server.post('/posts', (req, res, next) => {
  // Copy images uploaded to the WYSIWYG into static/images/uploads and rewrite the path.
  const { body } = req.body;
  console.dir(req.body);
  // Continue to JSON Server router
  next();
});

server.put('/posts/:id', (req, res, next) => {
  // Copy images uploaded to the WYSIWYG into static/images/uploads and rewrite the path.
  console.dir(req.body);
  // Continue to JSON Server router
  next();
});

server.patch('/posts/:id', (req, res, next) => {
  // Copy images uploaded to the WYSIWYG into static/images/uploads and rewrite the path.
  console.dir(req.body);
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}.`);
});
