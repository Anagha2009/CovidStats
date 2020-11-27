import React,{useState,useRef} from 'react'
import {Link} from 'react-router-dom';
import './sidebar.css'

const Sidebar=()=> {
    const [active,setActive]=useState(false)
    return (
        <div id="sidebar">
            <Link to ="/">
            <h3 id="nav-h3"className="text-center text-white font-weight-bolder text-monospace">
                COVID<br/>STATS
            </h3>
            </Link>
            <div id="sidenav-links" className="text-center">
            <Link to="/dashboard">
            <p onClick={()=>setActive(!active)} className={active ? 'act':''}>
               <span > Dashboard </span>
            </p>
            </Link>
            <br/>
            
            <p onClick={()=>setActive(!active)}className={active ? 'act':''}>
                <a href="https://covid19.who.int/" target="_blank">Global Stats</a>
            </p>
            <br/>
           
            <Link to="/precautions">
            <p className={active ? 'act':''}>
                <span onClick={()=>setActive(!active)}>Precautions</span>
            </p>
            </Link>
            <br/>
            
            <p onClick={()=>window.scrollTo({ behavior: 'smooth', top:12000 })}>News</p>
            </div>
            

        </div>
    )
}
export default Sidebar;
