import { Route, Redirect } from "react-router-dom";




export default function PrivateRoute({Component, auth, ...rest}) {
  // const {path, component, exact } = props;

  console.log("auth desde privado", auth);

  return (
    <Route {...rest}>
        {
            auth ? <Component /> : <Redirect to="/" />
        }
    
  </Route>
  )
  
}
