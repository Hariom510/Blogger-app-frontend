// import axios from "axios";
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
import "./sidebar.css"

function Sidebar() {
    // const [cats, setCats] = useState([]);

    // useEffect(()=>{
    //     const getCats = async()=>{
    //         const res = await axios.get("/categories");
    //         setCats(res.data)
    //         // console.log("cats is "+ JSON.stringify(res, undefined, "\t"));
    //     };
    //     getCats();
    // }, [])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img width="300px" src="images/aboutUs.png" alt="" />
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it
        to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        </div>
        
        {/* <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                    <Link className="link" to={`/?cat=${c.name}`} >
                        <li className="sidebarListItems">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div> */}

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar