import { useState } from 'react';
import styles from './App.module.scss'
import Polygon from './components/Polygon'
import { PolygonMode } from './constants';

function App() {
  const [mode, setMode] = useState<number>(PolygonMode.Add);

  return (
    <div className={styles.app}>
      <div className={styles.chooseMode}>
        <label>
          <input
            title='Add'
            type="radio"
            checked={mode === PolygonMode.Add}
            onChange={() => setMode(PolygonMode.Add)}
          />
          Add
        </label>
        <label>
          <input
            title='Edit'
            type="radio"
            checked={mode === PolygonMode.Edit}
            onChange={() => setMode(PolygonMode.Edit)}
          />
          Edit
        </label>
        <label>
          <input
            title='View'
            type="radio"
            checked={mode === PolygonMode.View}
            onChange={() => setMode(PolygonMode.View)}
          />
          View
        </label>
        <label>
          <input
            title='Remove'
            type="radio"
            checked={mode === PolygonMode.Remove}
            onChange={() => setMode(PolygonMode.Remove)}
          />
          Remove
        </label>
      </div>
      <Polygon
        mode={mode}
      />
    </div>
  )
}

export default App
