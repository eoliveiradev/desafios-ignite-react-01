import { NextApiRequest, NextApiResponse } from 'next';
import { prismicClient } from '../../services/prismic';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  switch (req.method) {
    case 'GET': {
      const { limit = 5, after } = req.query;

      const posts = await prismicClient.getAllByType(
        'posts',
        {
          after: String(after),
          limit: Number(limit),
        },
      );

      if (!posts) {
        res.status(500).json({ error: 'Error fetching posts' });
      }

      res.status(200).json(posts);

      break;
    }
    default: {
      res.status(404);
    }
  }
};

export default handler;
