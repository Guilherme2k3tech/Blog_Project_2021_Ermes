import React from 'react'
import { useState, useEffect } from 'react';
import {AutoComplete, Button} from "antd"
import "../App.css"

function Like() {
    const [Like, setLike] = useState(0);
    useEffect(() => {
      document.title = 'BlogErmes';
    },[]);
  
    return (
      <div className="like-div">
        <Button type="primary" shape="round" onClick={() => setLike(Like + 1)}>
          Curtir
        </Button>
        <br/>
        <p>{Like} Curtidas</p>

      </div>
    );
    
  }

  
export default Like