import { useImperativeHandle, useRef } from 'react'
import './App.css'
import Video from './Video'

function App() {
  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div className="App">
      <Video ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
