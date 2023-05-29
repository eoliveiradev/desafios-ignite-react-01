import { IPost } from '../@types/interfaces';

export const getReadingTime = (content: IPost['data']['content']): number => {
  const wordsPerMinute = 183;

  const words = content.reduce((total, topic) => {
    const wordsInContent = topic.body.reduce((acc, paragraph) => {
      const wordsInBody = paragraph.text.split(' ').length;
      return acc + wordsInBody;
    }, 1);

    return total + wordsInContent;
  }, 1);

  return Math.ceil(words / wordsPerMinute);
};
