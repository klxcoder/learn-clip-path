import { useState } from 'react';
import styles from './App.module.scss'
import Polygon from './components/Polygon'
import { MouseButton, type Point } from './constants';

function App() {
  const [points, setPoints] = useState<Point[]>([]);
  console.log(points);

  return (
    <div className={styles.app}>
      <div>
        <Polygon
          onMouseDown={({ mouseButton, percentX, percentY }) => {
            if (mouseButton === MouseButton.Left) {
              setPoints([...points, {
                x: percentX,
                y: percentY,
              }]);
            } else if (mouseButton === MouseButton.Right) {
              setPoints([]);
            }
          }}
        />
      </div>
    </div>
  )
}

export default App
