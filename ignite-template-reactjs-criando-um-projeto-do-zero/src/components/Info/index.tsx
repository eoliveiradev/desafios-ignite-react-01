import { IconType } from 'react-icons/lib';
import styles from './info.module.scss';
import commonStyles from '../../styles/common.module.scss';

interface InfoProps {
  icon: IconType;
  title: string;
}

export const Info = (props: InfoProps): JSX.Element => {
  const { icon: Icon, title } = props;

  return (
    <div className={styles.container}>
      <Icon className={styles.icon} />
      <p className={commonStyles.info}>
        {title}
      </p>
    </div>
  );
};
