import './App.css'
import Polygon from './components/Polygon'

function App() {

  return (
    <>
      <div>Minimal</div>
      <div>
        <Polygon
          onClick={() => alert('Clicked polygon')}
        />
      </div>
    </>
  )
}

export default App
