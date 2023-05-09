export interface IPost {
  id: string;
  uid: string;
  slugs: string[];
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  lang: string;
  alternate_languages: string[];
  data: {
    title: string;
    subtitle: string;
    author: string;
    banner: {
      alt: string;
      url: string;
    },
    content: {
      heading: string;
      body: {
        type: 'paragraph' | 'image';
        text: string;
      }[]
    }[]
  }
}

