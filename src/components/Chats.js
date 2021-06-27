import React from "react"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";
import { Button, Affix } from "antd";
import App from "../App";
import "../index.css"


const MainAPP = () =>{

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
export default MainAPP;