import { FaUser, FaCalendar } from 'react-icons/fa';
import Link from 'next/link';
import styles from './post.module.scss';
import commonStyles from '../../styles/common.module.scss';
import { Info } from '../Info';

interface PostProps {
  uid: string;
  title: string;
  description: string;
  date: string;
  user: string;
}

export const Post = (props: PostProps): JSX.Element => {
  const {
    title, date, description, user, uid,
  } = props;

  return (
    <Link href={`/post/${uid}`}>
      <a>
        <div className={styles.container}>
          <h1 className={commonStyles.heading}>{title}</h1>
          <p className={commonStyles.paragraph}>{description}</p>
          <footer>
            <Info icon={FaUser} title={user} />
            <Info icon={FaCalendar} title={date} />
          </footer>
        </div>
      </a>
    </Link>
  );
};
