import { api } from "./api";

interface IPostImageData {
  title: string;
  description: string;
  url: string;
}


export const postImage = async (data: IPostImageData) => {
  return api.post('/images', data)
    .then(response => response.data)
}