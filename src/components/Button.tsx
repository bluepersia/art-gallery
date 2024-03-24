import styles from './Button.module.css';
import imgArrowRight from '../img/icon-arrow-right.svg';
import imgArrowLeft from '../img/icon-arrow-left.svg';
import { PropsWithChildren } from 'react';

export enum Direction {
  Left,
  Right,
}

type Props = {
  direction: Direction;
};
export default function Button({
  direction,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button className={styles.btn}>
      {direction === Direction.Left && (
        <div className={styles.btn_arrow}>
          {<img src={imgArrowLeft} alt='Arrow to the left' />}
        </div>
      )}
      <p className={styles.btn_content}>{children}</p>
      {direction === Direction.Right && (
        <div className={styles.btn_arrow}>
          {<img src={imgArrowRight} alt='Arrow to the right' />}
        </div>
      )}
    </button>
  );
}
