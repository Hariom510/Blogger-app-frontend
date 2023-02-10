import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
// import Sidebar from "../../components/sidebar/Sidebar"
import axios from "axios";
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { baseURL } from "../../Apis";

function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  // console.log(JSON.stringify(location, undefined, "\t"));

  useEffect(()=>{
    const fetchPosts = async ()=>{
    const res = await axios.get(`${baseURL}/posts`+ search);  //this search will helps in query a particular post
    setPosts(res.data);
    // console.log(res); 
    }
    fetchPosts()  
  }, [search]) 
  return (
    <Container>
    <Header />
    <HomeContent>
    <div className="home">
      <Posts posts={posts} />
      {/* <Sidebar />  */}
    </div>
    </HomeContent>
    </Container>
  )
}
 
export default Home

const Container = styled.div`
   
    /* position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 0px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }   */
`

const HomeContent = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 0px;
    padding: 0% 0% 20% 0% ;

    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }


   .home{
    display: flex;
    @media(max-width: 850px){
        flex-direction: column;
     }
   }
  
`