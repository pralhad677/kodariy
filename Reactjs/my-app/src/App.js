import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Help from './Component/Help'
import Service from './Component/Services'
function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route  path="/contact">
        <Contact />
        </Route>
        <Route  path="/service">
          <Service />
        
        </Route>
        <Route  path="/help">
          <Help />
       
        </Route>
        <Route  path="/about">
         <About />
       
        </Route>

      </Switch>
      <h1>{props.name}</h1>
      
    </div>
  )
}

// export default App

export default function appWithErrorBoundary(props){
  return (
    <App {...props}/>
  )
}