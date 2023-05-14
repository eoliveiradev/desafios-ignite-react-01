import { IPost } from '../@types/interfaces';
import { api } from './api';

export const getPosts = async (
  params: { limit?: number; after?: string },
): Promise<IPost[]> => {
  const { after, limit } = params;

  return api.get(`/posts?limit=${limit}&after=${after}`)
    .then((response) => {
      if (response.status === 200) return response.data;
      throw new Error('Failed to load posts');
    });
};

export const getPostByUID = async (params: { uid: string }): Promise<IPost> => {
  const { uid } = params;

  return api.get(`/posts/${uid}`)
    .then((response) => {
      if (response.status === 200) return response.data;
      throw new Error('Failed to load post');
    });
};
