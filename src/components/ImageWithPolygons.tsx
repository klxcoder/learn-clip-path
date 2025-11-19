import { Fragment, useRef, useState, type ReactElement } from "react";
import styles from "./ImageWithPolygons.module.scss";
import { MouseButton, PolygonMode, type Point } from "../constants";
import classNames from "classnames";

const WIDTH: number = 500;
const HEIGHT: number = 500;

function ImageWithPolygons({
  mode,
}: {
  mode: number,
}): ReactElement {
  const divRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [activePoint, setActivePoint] = useState<number>(-1);
  const [hoverPoint, setHoverPoint] = useState<boolean>(false);

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
        const mouseButton: number = e.button;
        if (mouseButton === MouseButton.Middle) {
          console.log(points);
          return;
        }
        const rect: DOMRect = divRef.current.getBoundingClientRect();
        const offsetX: number = e.clientX - rect.left;
        const offsetY: number = e.clientY - rect.top;
        const percentX: number = offsetX / WIDTH * 100;
        const percentY: number = offsetY / HEIGHT * 100;
        const point: Point = {
          x: percentX,
          y: percentY,
        }
        switch (mode) {
          case PolygonMode.Add: {
            if (mouseButton === MouseButton.Left) {
              setPoints([...points, point]);
            } else if (mouseButton === MouseButton.Right) {
              setPoints([]);
              setActivePoint(-1);
            }
            break;
          }
          case PolygonMode.Edit: {
            if (hoverPoint) return;
            setPoints(points.map((p, index) => index !== activePoint ? p : point));
            break;
          }
        }
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        className={styles.img}
        src="./animals.webp"
      />
      {points.length >= 3 && <div
        className={styles.polygon}
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
        <Fragment
          key={index}
        >
          <div
            className={classNames(
              styles.circle,
              index === activePoint ? styles.active : '',
            )}
            onClick={() => {
              setActivePoint(index);
              switch (mode) {
                case PolygonMode.View: {
                  alert(`Clicked point ${index}`);
                  break;
                }
                case PolygonMode.Remove: {
                  setPoints(points.filter((_, i) => i !== index));
                  setActivePoint(-1);
                  break;
                }
              }
            }}
            onMouseEnter={() => setHoverPoint(true)}
            onMouseLeave={() => setHoverPoint(false)}
            style={{
              clipPath: `circle(2% at ${point.x}% ${point.y}%)`,
            }}
          >
            <div
              className={styles.index}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
              }}
            >{index}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default ImageWithPolygons;