import Form from "./components/Form";
import React from 'react'
import Success from "./components/Success";
import {Switch , Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="min-h-screen py-4 px-6 box-border bg-gray-100">
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/success" component={Success} />
      </Switch>
    </div>
  );
}

export default App;
