import React from "react";
import style from "./singup.css";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import logo from "../img/img1.jpg"
import { postWithoutAuth } from "../../services/httpService";



function Singup(props) {
  document.body.style.backgroundColor = "#516F7A";

  let pageStatus = props.state.changePageStatus

  const changePageSubmit = () => {
    pageStatus(true)
  }
  const submit = () =>{
    const user = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const body = 
    {
        "name":user,
        "password": String(password),
        "confirmPassword":String(confirmPassword)
    }
    postWithoutAuth("register",body)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        if(res.status == true){

        }
        else{
            console.log("ok")
        }
    })
    
    //giriş düzeltilecek
  
  }


  return (
    <div className="authBody">
    
      <div className="authBox">
        <Grid container >
          <Grid item xs={6} className="authInputArea">
          <h1>Kayıt Ol</h1>
            
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
            <TextField
            id="confirmPassword"
            label="passwordConfirm"
            variant="outlined"
            ></TextField>
            
            
            <button className="createUserBtn"
            type="submit"
            onClick={submit}
            >Hesap Oluştur</button>

            <button className="createUserBtn"
            type="submit"
            onClick={changePageSubmit}
            >Giriş Yap</button>
          </Grid>
          <Grid item xs={6} >
          <img src={logo}  className="authImage"></img>
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Singup;
