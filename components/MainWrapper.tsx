import { PropsWithChildren } from 'react';
import styles from '../styles/MainWrapper.module.scss';

const MainWrapper = ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default MainWrapper;
