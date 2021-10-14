import Form from "./components/Form";
import React , {useState} from 'react'
import Success from "./components/Success";

function App() {
  const [dataDonate, setDataDonate] = useState(null)
  
  return (
    <div className="min-h-screen py-4 px-6 box-border bg-gray-100">
        {
          dataDonate ?
            <Success setDataDonate={setDataDonate} dataDonate={dataDonate} />
          : <Form setDataDonate={setDataDonate} />
        }
    </div>
  );
}

export default App;
