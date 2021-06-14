import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default function Protegido({Component, path, isLogged, ...rest}) {
    
console.log("isLogged",isLogged);

return (
    <Route {...rest} 
    render={ (props)=> {
        if (isLogged) {
            return <Component />    
        } else {
            return <Redirect to={ 
                    {pathName:"/", state: {from: props.location}}
                }
        }        
    }  }
    />

)

    
};
