import styles from './App.module.scss'
import Polygon from './components/Polygon'

function App() {

  return (
    <div className={styles.app}>
      <div>
        <Polygon />
      </div>
    </div>
  )
}

export default App
