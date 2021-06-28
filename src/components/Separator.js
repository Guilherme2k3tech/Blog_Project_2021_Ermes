import React from "react"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { Button, Affix } from "antd";
import App from "../App";
import AppADM from "../AppADM";
import "../index.css"


export const MainAPP = () =>{

    const [bottom, setBottom] = useState(10);

    const history = useHistory();

    const handleLogout =  async () =>{
        await auth.signOut();

        history.push("/")


    }
    return(
        

            <div className="app-div-css">                 
                
                <App/>


                <div>

                    <Affix offsetBottom={bottom}>
                    <Button type="primary" shape="round" danger onClick={() => setBottom(bottom + 10)} onDoubleClick={handleLogout}>Sair </Button>
                    </Affix>



                </div>   
                   
            </div>
            
    );
}

export const MainAPPADM = () =>{

    const [bottom, setBottom] = useState(10);

    const history = useHistory();

    const handleLogout =  async () =>{
        await auth.signOut();

        history.push("/")


    }
    return(
        
            <div className="app-div-css">                 
                
                <AppADM/>


                <div>

                    <Affix offsetBottom={bottom}>
                    <Button type="primary" shape="round" danger onClick={() => setBottom(bottom + 10)} onDoubleClick={handleLogout}>Sair </Button>
                    </Affix>



                </div>   
                   
            </div>
            
    );
}
