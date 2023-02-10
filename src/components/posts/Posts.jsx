import Post from "../post/Post"
import "./posts.css"
import styled from "styled-components"

function Posts({posts}) {
  return (
    <Container className="posts">
      {posts.map((p)=>(
        
        <Post post={p} />
        
      ))}
        {/* <Post />
        <Post />
        <Post />
        <Post /> */}
    </Container>
  )
}

export default Posts

const Container = styled.div`

display: grid;
 grid-gap: 25px;
 gap: 25px;
 grid-template-columns: repeat(3, minmax(0, 1fr));
 text-align: center;
 margin: 0 auto;
  
 @media (max-width: 1000px){
     display: flex;
     flex-direction: column;
     text-align: center;
     margin: 0 auto;
 }
  /* @media(max-width: 760px) {
    flex-direction: column;
  } */
`


