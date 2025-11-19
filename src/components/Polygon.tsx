import { useRef, type ReactElement } from "react";
import styles from "./Polygon.module.scss";

const WIDTH: number = 500;
const HEIGHT: number = 500;

function Polygon(): ReactElement {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={divRef}
      className={styles.app}
      style={{
        width: WIDTH,
        height: HEIGHT,
      }}
      onMouseDown={(e) => {
        if (!divRef.current) return;
        const rect: DOMRect = divRef.current.getBoundingClientRect();
        const offsetX: number = e.clientX - rect.left;
        const offsetY: number = e.clientY - rect.top;
        const percentX: number = offsetX / WIDTH * 100;
        const percentY: number = offsetY / HEIGHT * 100;
        console.log({ mouseButton: e.button, percentX, percentY })
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        className={styles.img}
        src="./animals.webp"
      />
      <div
        className={styles.box}
        onClick={() => console.log('Clicked polygon')}
      />
    </div>
  );
}

export default Polygon;