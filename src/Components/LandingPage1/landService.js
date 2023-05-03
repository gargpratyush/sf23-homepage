import React from "react";
import { toast } from "react-toastify";
import Axios from 'axios';

const headers = { "Content-Type": "application/json" };

export const responseGoogle = async (response) => {
    //console.log(response);
    let data = {token: response.tokenObj.id_token};
    const userData = await googleLogin(data);
    if(userData === "error"){
        toast.error("error signing in with google", {position: toast.POSITION.TOP_CENTER});
        return;
    }
    //console.log(userData);
    sessionStorage.setItem("data", JSON.stringify(userData.message));
    if(userData.message.reg_complete){
        //await Store.setUserData(userData.message, response.profileObj.name, response.profileObj.email, response.profileObj.imageUrl);
        sessionStorage.setItem("name", response.profileObj.name);
        sessionStorage.setItem("email", response.profileObj.email);
        sessionStorage.setItem("token", userData.message.token);
        sessionStorage.setItem("data", JSON.stringify(userData.message));
        // props.setLoggedIn(true);
        toast.success("Logged in successfully", {position: toast.POSITION.TOP_CENTER});
    }
    else{
        toast.error("User registration not complete", {position: toast.POSITION.TOP_CENTER})
    }
}

export const googleLogin = data =>
    Axios.post("https://mainapi.springfest.in/api/user/login/google", JSON.stringify(data), {
        headers: headers
    })
        .then(res => {
            //console.log(res);
            return res.data;
        })
        .catch(error => {
            return "error";
});