import {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('/movies').then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
