//import React, { useState, useEffect } from "react";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";
import Menu from "./componentes/Menu";
import PrivateRoute from "./componentes/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
//  const [token, settoken] = useState(null);
//  const [user, setuser] = useState(null);

  return (
    <Router>
      <div className="row">
        <div className="col-12 text-center">
          <h1>User App</h1>
          Proyecto demo para creación de cuenta de usuario y login.
          <hr />
        </div>
      </div>

      <Route path="/" exact component={Login} />              
      <Route path="/registro" component={Registro} />
      <PrivateRoute path="/menu" component={Menu}  exact  />

        
    </Router>
  );
}

export default App;
