import React from 'react'
import "./Lampa.css"

function Lampa(props){
    function katt(){
        props.katt(props.index)
    }

    return(
        <div className = {`lampa ${props.allapot?"fel":"le"}`} onClick={()=> katt()}>
            
        </div>    
    );
}

export default Lampa;