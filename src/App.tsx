import { useState } from 'react';
import styles from './App.module.scss'
import Polygon from './components/Polygon'
import { MouseButton, type Point } from './constants';

function App() {
  const [points, setPoints] = useState<Point[]>([]);

  return (
    <div className={styles.app}>
      <div>
        <Polygon
          onMouseDown={({ mouseButton, point }) => {
            if (mouseButton === MouseButton.Left) {
              setPoints([...points, point]);
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
