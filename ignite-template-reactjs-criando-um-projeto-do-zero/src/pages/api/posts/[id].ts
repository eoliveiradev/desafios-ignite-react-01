import { NextApiRequest, NextApiResponse } from 'next';
import { prismicClient } from '../../../services/prismic';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;

  switch (req.method) {
    case 'GET': {
      const post = await prismicClient.getByUID('posts', String(id), {});

      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      }

      res.status(200).json(post);

      break;
    }
    default: {
      res.status(404);
    }
  }
};

export default handler;
