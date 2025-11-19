import styles from './App.module.scss'
import Polygon from './components/Polygon'

export const MouseButton = {
  Left: 0,
  Middle: 1,
  Right: 2,
} as const;

function App() {

  return (
    <div className={styles.app}>
      <div>
        <Polygon
          onMouseDown={({ mouseButton, percentX, percentY }) => {
            if (mouseButton === MouseButton.Left) {
              console.log('Left', { percentX, percentY });
            } else if (mouseButton === MouseButton.Right) {
              console.log('Right', { percentX, percentY });
            }
          }}
        />
      </div>
    </div>
  )
}

export default App
