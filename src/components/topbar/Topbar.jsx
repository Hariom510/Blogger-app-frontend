// import './topbar.css'
// import { Link } from 'react-router-dom'
// import { useContext } from 'react';
// import { Context } from '../../context/Context';
// function Topbar() {
//   const {user, dispatch} = useContext(Context);
//   const PF = "http://localhost:5000/images/";

//   const defaultProfilePic = "images/default.jpg"

//   const handleLogout = ()=>{
//     dispatch({type:"LOGOUT"});
//   }

//   return (
//     <div className='top'>
//         <div className="topLeft">
//         <i className="topIcon fa-brands fa-square-facebook"></i>
//         <i className="topIcon fa-brands fa-square-twitter"></i>
//         <i className="topIcon fa-brands fa-pinterest-p"></i>
//         <i className="topIcon fa-brands fa-square-instagram"></i>
//         </div>
//         <div className="topCenter">
//             <ul className="topList">
//                 <li className="topListItems">
//                   <Link className='link' to="/">HOME</Link>
//                   </li>
//                 <li className="topListItems"><Link className='link' to="/">ABOUT</Link></li>
//                 <li className="topListItems"><Link className='link' to="/">CONTACT</Link></li>
//                 <li className="topListItems"><Link className='link' to="/write">WRITE</Link></li>
//                 <li className="topListItems" onClick={handleLogout} >{user && "LOGOUT"}</li>
//             </ul>
//         </div>
//         <div className="topRight">
//           {
//             user ? ( <Link to="/settings">
//               {user.profilePic ? <img className='topImg' src={  PF+user.profilePic } alt="" /> : <img className='topImg' src={ defaultProfilePic } alt="" /> }
//                {/* <img className='topImg' src={  PF+user.profilePic } alt="😀" /> */}
//               </Link> ) : (
//               <ul className='topList'>
//                 <li className="topListItems">
//                 <Link className='link' to="/login">LOGIN</Link>
//                 </li>
//                 <li className="topListItems">
//                 <Link className='link' to="/register">REGISTER</Link>
//                 </li>
//               </ul>
//             )
//           }
//             <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
//         </div>
//     </div>
//   )
// }

// export default Topbar

import './topbar.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';

function Topbar() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    const {user, dispatch} = useContext(Context);
    const PF = "https://mernappbackend-kdry.onrender.com/images/";

    const defaultProfilePic = "images/default.jpg"

    const handleLogout = ()=>{
      dispatch({type:"LOGOUT"});
    }

    return (
        <>
        <Container id='Navbar'>
        <Link className='link mainIcon'  to='/' >
        <i style={{color: "white", fontSize:"38px"}} class="fa-brands fa-blogger"></i>
            </Link>
            <Menu>
                <Link className='link'  to='/' ><span>HOME</span></Link>
                <Link className='link'  to='/write' ><span>WRITE</span></Link> 
                <Link className='link'  to='/about' ><span>ABOUT</span></Link>  
                {user && <Link className='link' to='/settings' >{user && <span>SETTINGS</span>}</Link>    }
                {/* <Link className='link'  to='/contact' ><span>CONTACT</span></Link> */}
                {user && <Link className='link' onClick={handleLogout} >{user && <span>LOGOUT</span>}</Link>    }
                {/* <Link className='link' onClick={handleLogout} >{user && "LOGOUT"}</Link>    */}
            </Menu>
            <RightMenu>
             {
              user ? ( <Link to="/settings">
              {user.profilePic ? <img className='topImg' src={  PF+user.profilePic } alt="" /> : <img className='topImg' src={ defaultProfilePic } alt="" /> }
              </Link> ) : (
              <ul className='topList'>
                <li className="topListItems">
                <Link className='link' to="/login"><span>LOGIN</span></Link>
                </li>
                <li className="topListItems">
                <Link className='link' to="/register"><span>REGISTER</span></Link>
                </li>
              </ul>
            )
          }
            <CustomMenu onClick={()=> setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav  show = {burgerStatus}>
                <CloseWrapper>
                  <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                <Link className='link'  to='/' ><span>HOME</span></Link>
                <Link className='link'  to='write' ><span>WRITE</span></Link>
                <Link className='link'  to='/about' ><span>ABOUT</span></Link>  
                {user && <Link className='link' to='/settings' >{user && <span>SETTINGS</span>}</Link>    } 
                {/* <Link className='link'  to='/contact' ><span>CONTACT</span></Link> */}
                {user && <Link className='link' onClick={handleLogout} >{user && <span>LOGOUT</span>}</Link>    } 
                {/* <Link className='link' onClick={handleLogout} >{user && "LOGOUT"}</Link>    */}
        </BurgerNav>  
        </Container>
        </> 
    )
}
export default Topbar

const Container = styled.div`
    min-height: 60px;
    position: sticky;
    background-color: #090b13;
    color: white;
    /* background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%); */
    /* box-shadow: 0px 20px 24px 3px #747c85; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    top:0;
    left:0;
    right: 0;
    z-index: 999;
    font-family: 'Josefin Sans', sans-serif;
    .mainIcon{
      font-size: 25px;
      margin-left: 1.2rem;
      
    }
    /* .name{
        font-weight: bold;
        font-size: 1.4rem; 
        &:hover{
            color: inherit;
            cursor: pointer;
        }
    } */
    @media(max-width: 768px){
        padding: 0 16px;
        min-height: 80px;

    }  
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        text-decoration: none;
        color: inherit;    
        
        span{
            color: rgb(249, 249, 249);
            font-size: 15px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding:  2px 0px;
            white-space: nowrap;
            position: relative;

            &:before{
                background-color: rgb(249, 249, 249) ;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            }
        }

    }
    @media(max-width: 766px){
        display:none;
    }

`
const RightMenu = styled.div`
        display:flex;
        align-items: center; 
        margin-right: 10px;
        
        a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        text-decoration: none;
        color: inherit;
        
        span{
            color: rgb(249, 249, 249);
            font-size: 15px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding:  2px 0px;
            white-space: nowrap;
            position: relative;

            &:before{
                background-color: rgb(249, 249, 249) ;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            }
        }

    }
`
const CustomMenu = styled(MenuIcon)` 
    visibility: hidden;
    cursor: pointer;
    margin-left: 10px;
    @media(max-width: 768px){
        visibility: visible;
    }

`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 265px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* background: url("/images/home-background.png") center center / cover; */
    background-color: #090b13;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    a{
        /* border-bottom: 2px solid black; */
        border-radius: 6px;
        margin: 13px;
        font-size: 25px;
        font-weight: 600px;

        span{
            color: rgb(249, 249, 249);
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding:  2px 0px;
            white-space: nowrap;
            position: relative;

            &:before{
                background-color: rgb(249, 249, 249) ;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1;
            }
        }

    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    margin-right: .3rem;
    margin-top: .25rem;
    margin-bottom: 1rem;  
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`