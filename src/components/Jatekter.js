import React from "react";
import Lampa from "./Lampa";

function Jatekter(props){

    function katt(adat){
        
        //ezt a fvg-t hívja a gyerek komponens
        props.katt(adat)
    }

    return(
        <div className="Jatekter">
            {

                props.lista.map((e,i)=>{
                    return<Lampa allapot = {e} key = {i} index={i} katt={katt}/>
                })
            }
        </div>
    );
}

export default Jatekter;