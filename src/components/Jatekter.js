import React from "react";
import Lampa from "./Lampa";

function Jatekter(props){

    return(
        <div className="Jatekter">
            {

                props.lista.map((e,i)=>{
                    return<Lampa allapot = {e} key = {i} index={i}/>
                })
            }
        </div>
    );
}

export default Jatekter;