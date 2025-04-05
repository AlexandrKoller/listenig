import data  from '../data/etsy.json'
import Listening from './listening'

function App() {

  return (
    <>
      {Listening(data)}
    </>
  )
}

export default App