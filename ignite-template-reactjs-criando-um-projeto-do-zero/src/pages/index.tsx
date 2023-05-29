import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Post } from '../components/Post';
import { IPost } from '../@types/interfaces';
import { getPosts } from '../services/posts';
import styles from './home.module.scss';

interface HomeProps {
  posts: IPost[];
}

export default function Home(props: HomeProps): JSX.Element {
  const { posts: initialPosts } = props;

  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  const loadMorePosts = async (): Promise<void> => {
    const after = posts[posts.length - 1].id;

    try {
      const newPosts = await getPosts({ after, limit: 5 });

      setPosts((state) => [...state, ...newPosts]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.container}>
      {
        posts.map((post) => (
          <Post
            key={post.uid}
            uid={post.uid}
            date={post.first_publication_date}
            title={post.data.title}
            description={post.data.subtitle}
            user={post.data.author}
          />
        ))
      }
      <footer>
        <button
          className={styles.loadmore}
          type="button"
          onClick={loadMorePosts}
        >
          Carregar mais posts
        </button>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const posts = await getPosts({ limit: 5 });

    return {
      props: {
        posts: posts as unknown as IPost[],
      },
    };
  } catch (e) {
    return {
      props: {},
      notFound: true,
    };
  }
};
