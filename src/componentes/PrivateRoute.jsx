import {Route, Redirect} from "react-router-dom";
import Menu from "./Menu";


const isLogged = true;

export default function PrivateRoute({component: Component, ...rest}) {
   // const {path, component, exact } = props;

   

    return 
        <Route path="/menu" exact component={Menu}   />
            
    



};
