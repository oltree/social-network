import { FC, InputHTMLAttributes } from 'react';
import { Loader } from '../loader';
import styles from './Button.module.scss';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({ isLoading, children }) => (
  <button className={styles.button}>{isLoading ? <Loader /> : children}</button>
);
