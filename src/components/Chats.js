import React from "react"
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";
import { Button } from "antd";
import App from "../App";
import "../index.css"

const MainAPP = () =>{

    const history = useHistory();

    const handleLogout =  async () =>{
        await auth.signOut();

        history.push("/")
    }
    return(
        

            <div className="app-div-css">                 
                
                <App/>

                <div>

                <Button  onClick={handleLogout} className="Botão-Logout" type="primary" danger  >Sair</Button>
                </div>      
            </div>
            
    );
}
export default MainAPP;