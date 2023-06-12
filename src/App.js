import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Card from './Component/Card';
import { useState, useEffect } from 'react';

function App() {
  const [isDragDiseble, setIsDragDiseble] = useState(false);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App mt-2">
      {!loading ?
        <>
          <button type="button" className={isDragDiseble ? "btn btn-danger" : 'btn btn-info'} onClick={() => setIsDragDiseble(!isDragDiseble)}>Drag Handle</button>
          <Card Card="Card1" x="20" y="20" isDragDiseble={isDragDiseble} />
          <Card Card="Card2" x="800" y="20" isDragDiseble={isDragDiseble} />
          <Card Card="Card3" x="20" y="400" isDragDiseble={isDragDiseble} />
          <Card Card="Card4" x="800" y="400" isDragDiseble={isDragDiseble} />
        </>
        :
        <div class="spinner-grow text-secondary mt-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      }
      <ToastContainer />
    </div>
  );
}

export default App;
