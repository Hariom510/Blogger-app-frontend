import "./register.css"
import { useState } from "react"
// import { Link } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import { baseURL } from "../../Apis"

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authorname, setAuthorname] = useState("")
  const [error, setError] = useState(false)
  const [registering, setRegistering] = useState(false)

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setRegistering(true);
    setError(false);
    try{
      const res = await axios.post(`${baseURL}/auth/register`,{
        username,
        authorname,
        email, 
        password,
      });
      setRegistering(false);
      // console.log("res is : "+ JSON.stringify(res, undefined, "\t"));
      res.data && window.location.replace("/");
    } catch(err){
      setRegistering(false);
      setError(true);
    }
  }

  return (
    <Container className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label >Username</label>
            <input className="registerInput" type="text" required placeholder="Enter username..." onChange={(e)=>{setUsername(e.target.value)}} />
            <label >Authorname</label>
            <input className="registerInput" type="text" required placeholder="Enter authorname..." onChange={(e)=>{setAuthorname(e.target.value)}} />
            <label >Email</label>
            <input className="registerInput" type="text" required placeholder="Enter email..." onChange={(e)=>{setEmail(e.target.value)}} />
            <label >Password</label>
            <input className="registerInput" type="password" required placeholder="Enter password..." onChange={(e)=>{setPassword(e.target.value)}} />
            <button className="registerButton" type="submit">Register</button>
        </form>
        {/* <Link className="link" to="/login">
        <button className="registerLoginButton">Login</button>
          </Link>  */}
          {registering && <span style={{color:"white", marginTop:"10px"}}>Please wait...</span> }
          {error && <span style={{color:"red", marginTop:"10px"}}>Username or Authorname already exist!</span>}
    </Container>
  )
}

export default Register

const Container = styled.div`
    position: relative;
    min-height: 80vh;
    /* min-height: calc(100vh - 20px); */
    /* height: calc(100vh - 10px); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    color: white;
    padding-top: 0%;
    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }

    .registerForm{
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
  .registerInput{
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