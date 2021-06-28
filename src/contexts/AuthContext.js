import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { auth } from "../components/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

  useEffect(() => {
      auth.onAuthStateChanged((user) => {
          setUser(user);
          setLoading(false);

          if(user ){
          if(user && user.email === "prodgmk@gmail.com"){
           history.push('/Admin');
          }
          else{
            history.push('/MainAPP');
          }
        }
        else{
          history.push("/")
        }
        
    })
  }, [user, history])

  const value = {user};
  

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}