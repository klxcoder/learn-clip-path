import type { ReactElement } from "react";
import styles from "./Polygon.module.scss";

const WIDTH: number = 500;
const HEIGHT: number = 500;

interface PolygonProps {
  readonly onClick: () => void;
}

function Polygon({ onClick }: PolygonProps): ReactElement {
  return (
    <div
      className={styles.app}
      style={{
        width: WIDTH,
        height: HEIGHT,
      }}
    >
      <img
        className={styles.img}
        src="./animals.webp"
      />
      <div
        className={styles.box}
        onClick={onClick}
      />
    </div>
  );
}

export default Polygon;