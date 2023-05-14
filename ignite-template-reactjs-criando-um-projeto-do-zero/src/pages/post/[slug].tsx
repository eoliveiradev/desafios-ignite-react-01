import { GetStaticPaths, GetStaticProps } from 'next';
import { FaUser, FaCalendar, FaClock } from 'react-icons/fa';
import { getPostByUID } from '../../services/posts';
import { IPost } from '../../@types/interfaces';
import styles from './post.module.scss';
import { Info } from '../../components/Info';

interface PostProps {
  post: IPost;
}

export default function Post(props: PostProps): JSX.Element {
  const {
    post: {
      data: {
        banner, title, author, content,
      }, first_publication_date,
    },
  } = props;

  return (
    <div className={styles.container}>
      {
        banner.url ? (
          <img src={banner.url} alt={banner.alt} />
        ) : <div className={styles['image-fallback']} />
      }

      <div className={styles.content}>
        <header>
          <h1>{title}</h1>
          <div className={styles.content__details}>
            <Info icon={FaCalendar} title={first_publication_date} />
            <Info icon={FaUser} title={author} />
            <Info icon={FaClock} title="4 min" />
          </div>
        </header>

        {
          content.map(({ heading, body }) => (
            <div className={styles.post}>
              <h2>{heading}</h2>
              {
                body.map(({ text }) => <p>{text}</p>)
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getPostByUID({ uid: params.slug as string });

    return { props: { post } };
  } catch (e) {
    return { props: {}, redirect: { destination: '/500', permanent: false } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: 'blocking' });
