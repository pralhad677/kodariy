import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Help from './Component/Help'
import Service from './Component/Services'
import Admin from './Component/Admin'
import Auth from './Component/Auth'
import Login from './Component/Login'
// import DahsBoard from './Component/Dashboard'
import Dashboard from './Component/Dashboard'
import ErrorBoundary from './Component/ErrorBoundaer'
import FbCOmment from './Component/FbComent'

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
        <Route  path="/admin">
         <Admin />
        </Route>
        {/* <Route  path="/auth">
         <Auth />
        </Route> */}
        <Route  path="/login">
        <Login />
        </Route>
        <Route  path="/dashboard/:id">
        <Dashboard />
        </Route>
        <Route  path="/FbComment">
        <FbCOmment />
        </Route>

      </Switch>
      <h1>{props.name}</h1>
      
    </div>
  )
}

// export default App

export default function appWithErrorBoundary(props){
  return (
    <ErrorBoundary>
        <App {...props}/>
    </ErrorBoundary>
  
  )
}