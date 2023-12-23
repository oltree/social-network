import cn from 'clsx';
import { forwardRef } from 'react';
import styles from './Field.module.scss';
import { TypeInputProps } from './field.types';

export const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ error, style, Icon, className, ...rest }, ref) => (
    <label className={cn(styles.field, className)} style={style}>
      {Icon && (
        <div className={styles.icon}>
          <Icon />
        </div>
      )}
      <input ref={ref} {...rest} />
      {error && <div className={styles.error}>{error.message}</div>}
    </label>
  )
);
