import express from 'express';
import next from 'next';

import { getPost, getPosts, getTags } from 'utils/data';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    const tags = getTags();

    tags.forEach(tag => {
      server.get(`/${tag.slug}/:slug`, (req, res, next) => {
        // Find post matching the slug
        const post = getPost({ slug: req.params.slug });
        if (!post) {
          next();
        } else {
          app.render(req, res, '/post', { id: post.id });
        }
      });
    });

    server.get('/', (req, res) => {
      app.render(req, res, '/');
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
