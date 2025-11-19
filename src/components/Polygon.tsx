import { useRef, type ReactElement } from "react";
import styles from "./Polygon.module.scss";

const WIDTH: number = 500;
const HEIGHT: number = 500;

const MouseButton = {
  Left: 0,
  Middle: 1,
  Right: 2,
} as const;

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
        const mouseButton: number = e.button;
        if (mouseButton === MouseButton.Left) {
          console.log('Left', { percentX, percentY });
        } else if (mouseButton === MouseButton.Right) {
          console.log('Right', { percentX, percentY });
        }
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