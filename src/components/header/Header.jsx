import "./header.css"
import styled from "styled-components"

function Header() {
  return (
    <>
    <Headers className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Publish your passions, your way</span>
            {/* <span className="headerTitleMd">Create a unique and beautiful blog. It's easy and free.</span> */}
            <span className="headerTitleLg">Blogger</span>
            <MainImg className="mainImg1" src="images/mainImg.webp" alt="" />
            <MainImg2 className="mainImg2" src="images/mainImg2.png" alt="" />
        </div>
        <IMG  alt="" className="headerImg" />
    </Headers>
    </>
  )
}

export default Header

const Headers = styled.div`
  /* min-height: 100vh; */
`
const MainImg = styled.img`
    position: absolute;
    width: 30vw;
    height: auto;
    top: 25%;
    left: 2%;
  @media(max-width: 900px) {
    top: 47%;
    width: 50vw;
    height: 50vh;
    left: 27%;
  }
  @media(max-width: 470px) {
    top: 47%;
    width: 85vw;
    height: auto;
    left: 7%;
  }
`
const MainImg2 = styled.img`
    position: absolute;
    width: 30vw;
    height: auto;
    top: 25%;
    right: 2%;
  @media(max-width: 900px) {
   display: none;
  }
`

const IMG = styled.div`
     position: relative;
    min-height: calc(100vh - 0px);
    overflow-x: hidden;
    display: block;
    top: 0px;
    padding: 0 ;

    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }

`
