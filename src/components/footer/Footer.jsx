import React from 'react'
import styled from 'styled-components'
import Sidebar from '../sidebar/Sidebar'

function Footer() {
  return (
    <FooterContent id='Footer'>
       <Sidebar />
        <footer style={{padding: "25px"}}>
            Copyrights &#169; 2023 Hariom Kumar
        </footer>
    </FooterContent>
  )
}

export default Footer

const FooterContent = styled.div`
    text-align: center;
    /* margin: 0 auto; */
    /* min-height: 10vh; */
    padding-top: 50px;
    font-family: 'Varela Round', sans-serif;
    color: white;
    position: relative;
    /* min-height: calc(100vh - 250px); */
    overflow-x: hidden;
    display: block;
    top: 0px;
    bottom: 0px;
    min-height: 85vh;
    /* margin-bottom: -400px;
    padding-bottom: -500px; */
    /* border: 2px solid red; */
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