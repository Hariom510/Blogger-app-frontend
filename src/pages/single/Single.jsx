// import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlepost/SinglePost"
import styled from "styled-components"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"

function Single() {
  return (
    <>
    <ScrollToTop />
    <SinglePostContent>
    <div className="single">
        <SinglePost />
        {/* <Sidebar /> */}
    </div>
    </SinglePostContent> 
    </>
  )
}

export default Single

const SinglePostContent = styled.div`
 
`