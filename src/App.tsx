import { useState } from 'react';
import styles from './App.module.scss'
import Polygon from './components/Polygon'
import { MouseButton, PolygonMode, type Point } from './constants';

function App() {
  const [mode, setMode] = useState<number>(PolygonMode.Add);
  const [points, setPoints] = useState<Point[]>([]);

  return (
    <div className={styles.app}>
      <div>
        <label>
          <input
            type="radio"
            checked={mode === PolygonMode.Add}
            onChange={() => setMode(PolygonMode.Add)}
          />
          Add
        </label>
        <label>
          <input
            type="radio"
            checked={mode === PolygonMode.Edit}
            onChange={() => setMode(PolygonMode.Edit)}
          />
          Edit
        </label>
        <label>
          <input
            type="radio"
            checked={mode === PolygonMode.View}
            onChange={() => setMode(PolygonMode.View)}
          />
          View
        </label>
      </div>
      <Polygon
        points={points}
        onMouseDown={({ mouseButton, point }) => {
          if (mouseButton === MouseButton.Left) {
            setPoints([...points, point]);
          } else if (mouseButton === MouseButton.Right) {
            setPoints([]);
          }
        }}
        mode={mode}
      />
    </div>
  )
}

export default App
