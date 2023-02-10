import "./login.css"
// import { Link } from "react-router-dom"
import { useContext, useRef } from "react"
import { Context } from "../../context/Context";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { baseURL } from "../../Apis";
import { useState } from "react";

function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const [loging, setLoging] = useState(false);
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoging(true);
    dispatch({ type: "LOGIN_START" });
    try{
        const res = await axios.post(`${baseURL}/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      setLoging(false);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setLoging(false);
      dispatch({ type: "LOGIN_FAILURE" });
      toast.warning("Wrong Credentials!..", {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition:Slide,
      });
    } 
  };
  //  console.log("user: "+ JSON.stringify(user, undefined, "\t")); 
  return (
    <Container className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label >Username</label>
            <input
              required
              className="loginInput"
              type="text"
              placeholder="Enter your username..."
              ref={userRef}
               />
            <label >Password</label>
            <input
             required
             className="loginInput" 
             type="password" 
             placeholder="Enter your password..." 
             ref={passwordRef} 
             />
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            {loging && <span style={{color:"white", marginTop:"10px", textAlign:"center"}}>Please wait...</span> }
        </form>
        {/* <Link className="link" to="/register">
        <button className="loginRegisterButton">Register</button>
           </Link> */}
           <ToastContainer />
    </Container>
  )
}

export default Login  

const Container = styled.div`
    position: relative;
    min-height: 80vh;
    /* min-height: calc(100vh - 20px); */
    /* height: calc(100vh - 10px); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    color: white;
    padding-top: 0;
    /* display: block; */
    /* top: 0px;
    padding: 0 ; */

    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }

    .loginForm{
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      width: 40vw;
      @media(max-width: 800px){
        width: 80vw;
      }
   }
   label{
    font-size: 1rem;
    letter-spacing: 0.7px;
    font-weight: bolder;
   }


.loginInput{
      color: gray;
      font-size: 1rem;
      padding: 5px;
      margin:  0;
      border: none;
      background: url("/images/home-background.png") center center / cover;
      border: 3px solid rgba(249, 249, 249, 0.1);
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      @media(max-width: 800px){
        font-size: 1.3rem;
      }
 }

`