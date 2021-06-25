import React from "react";
import { GoogleOutlined, } from '@ant-design/icons';
import "firebase/app";
import { auth } from "../components/firebase.js";
import firebase from "firebase/app"


const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Bem vindo ao Spott!</h2>
                <br />
                <div className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Logar com Google
                </div>
            </div>
        </div>
    )

}


export default Login;