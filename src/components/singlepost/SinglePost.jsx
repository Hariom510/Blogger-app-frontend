import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Context } from "../../context/Context";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import "./singlePost.css"
import { baseURL } from "../../Apis";

function SinglePost() {
  const location = useLocation();
  // console.log("loc: "+ JSON.stringify(location, undefined, "\t"));
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://mernappbackend-kdry.onrender.com/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [updating, setUpdating] = useState(false);


  // console.log("user is "+ JSON.stringify(user, undefined,"\t"));

  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get(`${baseURL}/posts/` + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);

      // console.log("res is "+ JSON.stringify(res, undefined,"\t"));
    };
    getPost()
  },[path]);

  const handleDelete = async ()=>{
    try{
      await axios.delete(`${baseURL}/posts/${post._id}`, {data: {authorname: user.authorname}});
      window.location.replace("/");
    } catch(err) {}  
  }

  const handleUpdate = async ()=>{
      setUpdating(true);
    try{
      await axios.put(`${baseURL}/posts/${post._id}`, { authorname: user.authorname, title: title, desc: desc });
      // window.location.reload("/");
      setUpdateMode(false);
      setUpdating(false);
      toast.success("Blog updated successfully...", {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition:Slide,
      });
    } catch(err) {
      setUpdating(false);
      toast.warning("Title already exist!", {
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

  useEffect(() => {
      window.scrollTo({
        top: 0,
      });
    }, []);

  return (
    <Container className="singlePost">
        <IMG className="singlePostyWrapper">
          {post.photo && (
            <img src={PF+post.photo}
             alt=""
             className="singlePostImg"
            />
          )}
          {
            updateMode ? <input className="singlePostTitleInput" type="text" value={title} autoFocus onChange={(e)=>setTitle(e.target.value)} /> : (
              <>
              <h1 className="singlePostTitle">{title}
              {/* {post.authorname === user?.authorname && (  //if there is no user it will not look for username
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square fa-5x" onClick={()=>setUpdateMode(true)}></i>
                <i className="singlePostIcon fa-regular fa-trash-can fa-5x" onClick={handleDelete}></i>
               </div>
              )}  */}
              </h1>
              {post.authorname === user?.authorname && (  //if there is no user it will not look for username
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square fa-5x" onClick={()=>setUpdateMode(true)}></i>
                <i className="singlePostIcon fa-regular fa-trash-can fa-5x" onClick={handleDelete}></i>
               </div>
              )} 
              </>
            )}
            
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: {" "}
                <Link className="link" to={`/?authorname=${post.authorname}`}><b>{post.authorname}</b></Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)} /> :
            <p className="singlePostDesc">
            {desc}
            </p> }  
            {
               updateMode && <>
               <button className="singlePostButton" onClick={handleUpdate}>Update</button> <br />
               {updating && <span style={{color:"white", textAlign:"center", margin:"10px auto"}}>Please wait...</span>}
               </>
            }
        </IMG>
        <ToastContainer />
    </Container>
    
  )
}

export default SinglePost

const Container = styled.div`
    position: relative;
    min-height: 100vh;
    padding-top: 5%;
    padding-bottom: 10%;
    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }

    .singlePostTitleInput{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px auto;
    font-family: 'Lora', serif;
    font-size: 20px;
    color: white;
      padding: 10px;
      height: 5vh;
      background: url("/images/home-background.png") center center / cover;
      border: 3px solid rgba(249, 249, 249, 0.1);
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
}
.singlePostDescInput{
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 10px auto;
    font-family: 'Lora', serif;
    font-size: 20px;
    color: white;
    padding: 10px;
      min-height: 50vh;
      min-width: 80vw;
      background: url("/images/home-background.png") center center / cover;
      border: 3px solid rgba(249, 249, 249, 0.1);
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
}
`
const IMG = styled.div`
  
  .singlePostImg{
    width: 40vw;
    height: auto;
    object-fit: cover;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media(max-width: 800px){
      width: 50vw;
      height: auto;
    }
    @media(max-width: 600px){
      width: 80vw;
      height: auto;
    }
}
`