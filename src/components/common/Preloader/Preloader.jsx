import React from "react";
import loader from "../../../images/loading.svg";


const Preloader = (props) => {
    return (
        <div>
            <img alt='Loading...' src={loader}/>
        </div>
    )
}

export default Preloader