import { useRef, type ReactElement } from "react";
import styles from "./Polygon.module.scss";
import { PolygonMode, type Point } from "../constants";

const WIDTH: number = 500;
const HEIGHT: number = 500;

function Polygon({
  points,
  onMouseDown,
  mode,
}: {
  points: Point[],
  onMouseDown: (props: {
    mouseButton: number,
    point: Point,
  }) => void,
  mode: number,
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
        if (mode !== PolygonMode.Add) return;
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
      {points.length >= 3 && <div
        className={styles.box}
        onClick={() => {
          switch (mode) {
            case PolygonMode.View: {
              alert('Clicked polygon');
              break;
            }
          }
        }}
        style={{
          clipPath: `polygon(${points.map(point => `${point.x}% ${point.y}%`).join(',')})`,
        }}
      />}
      {points.map((point, index) => (
        <div
          key={index}
          className={styles.box}
          onClick={() => {
            switch (mode) {
              case PolygonMode.View: {
                alert(`Clicked point ${index}`);
                break;
              }
            }
          }}
          style={{
            clipPath: `circle(2% at ${point.x}% ${point.y}%)`,
          }}
        />
      ))}
    </div>
  );
}

export default Polygon;