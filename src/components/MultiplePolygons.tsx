import { useState, type ReactElement } from "react";
import styles from './MultiplePolygons.module.scss';

function MultiplePolygons(): ReactElement {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className={styles.parent}
      onClick={() => {
        if (hover) return;
        console.log('Clicked parent');
      }}
    >
      <div className={styles.child}>
        <div
          className={styles.shape1}
          onClick={() => {
            console.log('Clicked shape1');
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div className={styles.child}>
        <div
          className={styles.shape2}
          onClick={() => {
            console.log('Clicked shape2');
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
    </div>

  );
}

export default MultiplePolygons;