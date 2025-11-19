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
      <div
        onClick={onClick}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'rgba(255,0,0,0.3)',
          border: '10px solid blue',
          cursor: 'pointer',
          clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)',
        }}
      />
    </div>
  );
}

export default Polygon;