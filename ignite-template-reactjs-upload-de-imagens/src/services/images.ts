import { IImage } from "../@types/interfaces";
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

interface IGetImageArgs {
  after?: string;
}

interface IGetImageResponse {
  data: IImage[];
  after: string | null;
}

export const getImage = async (args: IGetImageArgs): Promise<IGetImageResponse> => {
  return api.get('/images', { params: args })
    .then(response => response.data)
}