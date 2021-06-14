import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Protegido(props) {
    const {componente, ruta, isLogged, ...rest} = props;

return (
    <Route {...rest} 
    render={ ()=> {
        return <componente />
    }  }
    />

)

    
};
