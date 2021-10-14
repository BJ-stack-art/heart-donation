import Form from "./components/Form";
import React , {useState} from 'react'
import Success from "./components/Success";

function App() {
  const [dataDonate, setDataDonate] = useState(null)
  
  return (
    <div className="App">
        {
          dataDonate ?
            <Success dataDonate={dataDonate} />
          : <Form setDataDonate={setDataDonate} />
        }
    </div>
  );
}

export default App;
