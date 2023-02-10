import "./settings.css"
// import Sidebar from "../../components/sidebar/Sidebar"
import { useContext, useState } from "react"
import { Context } from "../../context/Context"
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import styled from "styled-components";
import { baseURL } from "../../Apis";

function Settings() {
  const [file, setFile] = useState(null);
  const [updating, setUpdating] = useState(false); 
  // const [password, setPassword] = useState("");
  // const [success, setSuccess] = useState(false);
  const { user, dispatch }  = useContext(Context);
  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const PF = "https://mernappbackend-kdry.onrender.com/images/"


  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username: username,
      email: email,
      // password,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try{
        await axios.post(`${baseURL}/upload`, data);
      } catch (err) {}
    }
    try{
      const res = await axios.put(`${baseURL}/users/` + user._id,
        updatedUser
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${localStorage.getItem("user")}`,
        // }, 
      );
        setUpdating(false); 
      // setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      toast.success("Profile has been updated...", {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition:Slide,
      });
    } catch (err){
      setUpdating(false);
      dispatch({ type: "UPDATE_FAILURE" });
      toast.warning("Username already exist!", {
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
  }

  return ( 
    <SettingsContent className="settings">
        <div className="settingsWrapper">
           <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            {/* <span onClick={deleteAccount} className="settingsDeleteTitle">Delete Account</span> */}
           </div>
           <form action="" className="settingsForm" onSubmit={handleSubmit}>
             <label style={{color: "white"}}>Profile Picture</label>
             <div className="settingsPP">
             {/* PF+user.profilePic */}
             {/* { user.profilePic ? <img id="imgId" src={file ? URL.createObjectURL(file) : PF+user.profilePic } alt="" /> : <img src={ defaultProfilePic } alt="" /> } */}
                <img id="imgId" src={file ? URL.createObjectURL(file) : PF+user.profilePic } alt="" />
                <label htmlFor="fileInput"> 
                    <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} onChange={(e)=>setFile(e.target.files[0])} />
             </div>
             <label style={{color: "white"}}>Username </label>
             <input className="inputValue" type="text" defaultValue={user.username} placeholder={user.username} onChange={(e)=>setUserName(e.target.value)} />
             <label style={{color: "white"}}>Email</label>
             <input className="inputValue" type="email" defaultValue={user.email} placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
             {/* <label>Password</label>
             <input type="password" defaultValue={user.password} onChange={(e) => setPassword(e.target.value)} /> */}
             <button className="settingsSubmit" type="submit">Update</button>
             {updating && <span style={{color:"white", marginTop:"10px", textAlign:"center"}}>Please wait...</span> }
             {/* {success && <span style={{color: "green", textAlign:"center", margin:"20px"}}>Profile has been updated... </span>} */}
           </form> 
        </div>
        {/* <Sidebar /> */}
        <ToastContainer />
    </SettingsContent>
  )
}

export default Settings

const SettingsContent = styled.div`
    /* display: flex; */
    /* padding: 4rem; */
    
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 0px;
    padding: 5vh calc(3.5vw + 5px);

    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }  
     
    .inputValue{
      color: gray;
      font-size: 1rem;
      padding: 6px;
      margin: 10px 0;
      border: none;
      background: url("/images/home-background.png") center center / cover;
      border: 3px solid rgba(249, 249, 249, 0.1);
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`