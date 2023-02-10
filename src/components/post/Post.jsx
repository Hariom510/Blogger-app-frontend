import "./post.css"
import {Link} from "react-router-dom"
import styled from "styled-components";
// import { baseURL } from "../../Apis";

function Post({post}) {
  // const PF = "http://localhost:5000/images/";
  const PF = "https://mernappbackend-kdry.onrender.com/images/";
  // console.log("image is: " + post.photo);
  return (
    <Container className="post">
      <Content>
    <Link className="link" to={`/post/${post._id}`}>
      <Wrap>
      {post.photo && (
        <img
          className="postImg"
          src={PF+post.photo}
         alt="" />
      )
      }
        {/* <img  className="postImg" src="https://i.pinimg.com/originals/70/e8/95/70e8957ec64793bcf30f0666c7c0b96e.jpg" alt="" /> */}
        <div className="postInfo">
            {/* <div className="postCats">
              {post.categories.map((c)=>(
                <span className="postCat">{c.name}</span>
              ))}
            </div> */}
            {/* <Link style={{color:"white"}} className="link" to={`/post/${post._id}`}> */}
            <span style={{color:"white"}}  className="postTitle">
                {post.title}
            </span>
            {/* </Link> */}
            {/* <hr /> */}
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc" maxlength="3">
          {post.desc}
        </p>
        </Wrap>
        </Link>
        </Content> 
    </Container> 
  )
}

export default Post

const Container = styled.div`
     padding: 15px; 
     /* text-align: center;
     margin: 0 auto; */
 `;

 const Content = styled.div`
 /* display: flex; */
 /* grid-gap: 25px;
 gap: 25px; */
 /* grid-template-columns: repeat(1, minmax(2, 1fr)); */
  /* display: flex; */
 @media(max-width: 768px){
  /* display: flex; */
  flex-direction: column;
     /* grid-template-columns: repeat(2, minmax(2, 1fr)); */
 }
 `;

 const Wrap = styled.div`
 /* padding-top: 56.25%; */
 /* align-items: center; */
 
 border-radius: 10px;
 width: 24vw;
 height: 75vh;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 cursor: pointer;
 overflow: hidden;
 /* position: relative; */
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 border: 3px solid rgba(249, 249, 249, 0.1);
 img {
   /* inset: 0px;
   display: block; */
   height: 280px;
   object-fit: cover;
   opacity: 1;
   /* position: absolute; */
   transition: opacity 500ms ease-in-out 0s;
   width: 100%;
   /* z-index: 1; */
   top: 0;
 }
 &:hover {
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
   transform: scale(1.05);
   border-color: rgba(249, 249, 249, 0.8);
 }
 @media(max-width: 1000px){
  width: 75vw;
  height: auto;
 }
  
`;
