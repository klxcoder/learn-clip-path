import { useRef, type ReactElement } from "react";
import styles from "./Polygon.module.scss";
import type { Point } from "../constants";

const WIDTH: number = 500;
const HEIGHT: number = 500;

function Polygon({
  onMouseDown,
}: {
  onMouseDown: (props: {
    mouseButton: number,
    point: Point,
  }) => void,
}): ReactElement {
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
        const mouseButton: number = e.button;
        onMouseDown({
          mouseButton,
          point: {
            x: percentX,
            y: percentY,
          }
        });
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
        style={{
          clipPath: `polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)`,
        }}
      />
    </div>
  );
}

export default Polygon;