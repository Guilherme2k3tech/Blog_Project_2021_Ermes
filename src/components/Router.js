import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext.js"
import {MainAPP} from "./Separator"
import {MainAPPADM} from "./Separator"
import Login from "./Login"

function Roteador() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/MainAPP"component={MainAPP} />
            <Route exact path="/Admin"component={MainAPPADM} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}   
 
export default Roteador;