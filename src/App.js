import './App.css'
import Light from './components/Light';
import React, {useState} from "react"

function App() {

  const cores = ["red", "yellow", "green"];
  const [acesa, setAcesa] = useState("red");

return (
    <div className="App">
      {
        cores.map(cor => {
         return <Light cor={cor} acesa={acesa} setAcesa={setAcesa}/>
        })

      }
    </div>
  );
}

export default App;
