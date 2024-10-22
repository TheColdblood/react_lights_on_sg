import React, { useContext } from 'react'
import "./Lampa.css"
import { KattContext } from '../context/KattContext';

function Lampa(props){
    const {katt}=useContext(KattContext)
    
    function kattintas(){
        katt(props.index)
    }

    return(
        <div className = {`lampa ${props.allapot?"fel":"le"}`} onClick={()=> kattintas()}>
            
        </div>    
    );
}

export default Lampa;