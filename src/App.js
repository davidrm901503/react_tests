
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Tabla from './components/tabla'



function App() {

  const [cryptos, setCrypto] = useState([]);
  const [progressPending, setProgressPending] = useState(true);
  
  useEffect(() => {
    const getCoins = async () => {
      const response = await axios("http://127.0.0.1:8000/");
      setCrypto(response.data);
      setProgressPending(false);
    };
    getCoins();
  }, []);

  return (
    <div className="App">
      <Tabla cryptos={cryptos}  progressPending={progressPending}  />
    </div>
  );
}

export default App;

