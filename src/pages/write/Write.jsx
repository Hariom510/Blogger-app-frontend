import axios from "axios";
import { useContext, useState } from "react"
import { Context } from "../../context/Context";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import "./write.css"
import { baseURL } from "../../Apis";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [publishing, setPublishing] = useState(false);
  const { user } = useContext(Context);

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setPublishing(true);
    const newPost = {
      username: user.username,
      authorname: user.authorname,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.photo = fileName;
      try{
        await axios.post(`${baseURL}/upload`, data);
      } catch (err) {}
    }
    try{
      const res = await axios.post(`${baseURL}/posts`, newPost);
      setPublishing(false);
      // window.location.replace("/post/"+ res.data._id);
      window.location.replace("/");
      toast.success("Blog created successfully...", {
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
      setPublishing(false);
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
    axios.post(`${baseURL}/posts`);
  }

  return (
    <Container className="write">
      {file && (
      <img
      className="writeImg" 
      src={URL.createObjectURL(file)}
      alt="" />
      )}
       
        <form className="writeForm" onSubmit={handleSubmit}>
            <div style={{marginTop:"30px"}} className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class=" writeIcon fa-solid fa-camera"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>{setFile(e.target.files[0])}} />
                <input type="text" required placeholder="Title" className="writeInput writeTitle" autoFocus={true} onChange={e=>setTitle(e.target.value)} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." required type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)} ></textarea>
            </div>
            <div style={{textAlign: "center", margin:"0 auto"}}>
            <button className="writeSubmit" type="submit">Publish</button>
            {publishing && <span style={{color: "white", margin:"2px auto"}}>Please wait...</span>}
            </div>
        </form>
        <ToastContainer />
    </Container>
  )
}

export default Write

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 30px);
    overflow-x: hidden;
    display: block;
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

    .writeImg{
    width: 30vw;
    height: auto;
    object-fit: cover;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      @media(max-width:800px){
        width: 60vw;
      }
}
    .writeInput{
      color: white;
      font-size: 1.7rem;
      /* padding: 10px;
      margin: 10px 0; */
      width: 70vw;
      padding: 10px;
      height: 5vh;
      background: url("/images/home-background.png") center center / cover;
      border: 3px solid rgba(249, 249, 249, 0.1);
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    .writeTitle{
      @media(max-width: 1150px){
        width: 55vw;
      }
    }
    .writeText{
      width: 75vw;
      font-size: 1.5rem;
      height: 27vh;
      margin-top: 2rem;
    }
`