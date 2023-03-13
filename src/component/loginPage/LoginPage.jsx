import React, { useEffect, useState } from "react";
import Auth from "../auth/Auth";
import Singup from "../singup/Singup";




function LoginPage(){

    const [pageStatus, setPageStatus] = useState(true);

    const changeStatus = (status) =>{
        setPageStatus(status)
    }

    useEffect(() =>{
        console.log(pageStatus)
    },[pageStatus])
    return(
        <div>
            {
                pageStatus ? 
                <Auth state={{changePageStatus: changeStatus}}></Auth>  :
                <Singup state={{changePageStatus: changeStatus}}></Singup>
            }
        </div>
    )
}

export default LoginPage;