import React from "react";
import style from "./auth.css";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import logo from "../img/img1.jpg"
import { postWithoutAuth } from "../../services/httpService";
import {useParams} from "react-router-dom"


function Auth(props) {
  document.body.style.backgroundColor = "#516F7A";
  let params = useParams()
  const changeStatusFunc = props.state.changePageStatus;
  
  const changeStatus = () => {
    changeStatusFunc(false)
    
  }


  const submit = () =>{

    const user = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    const body = 
    {
        "name":user,
        "password":password
    }
    postWithoutAuth(body)
    .then(res => res.json())
    .then(result => {
        localStorage.setItem("user",result.user)
        localStorage.setItem("user",result.user)
        localStorage.setItem("user",result.user)
        localStorage.setItem("user",result.user)
    })
    //giriş düzeltilecek
  
  }

  
  return (
    <div className="authBody">
    
      <div className="authBox">
        <Grid container >
          <Grid item xs={6}>
          <img src={logo} style={{}} className="authImage"></img>
          </Grid>
          <Grid item xs={6} className="authInputArea">
            <h1>Giriş Yap</h1>
            
            <br></br>
            <hr style={{width:"300px"}}></hr>
            <br></br>
            <br></br>
            <TextField
            id="email"
            label="Email"
            variant="outlined"
            
            ></TextField>
            <br></br>
            <br></br>
            <br></br>

            <TextField
            id="password"
            label="password"
            variant="outlined"
            ></TextField>
            <br></br>
            <br></br>
            <br></br>
            <button className="authButton"
            type="submit"
            onClick={submit}
            >Giriş Yap</button>
            <div style={{marginTop:"20px"}}>
            <a>Şifreni mi unuttun?</a>
            </div>
            <hr style={{width:"300px",marginTop:"20px"}}></hr>
            <button className="createUserBtn"
            type="submit"
            onClick={changeStatus}
            >Hesap Oluştur</button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Auth;
