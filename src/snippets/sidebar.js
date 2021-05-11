import React from 'react'
import WorkIcon from '@material-ui/icons/Work';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Sai from "./img/jpeg.jpg"
function sidebar() {
    const emailto = () => {
        window.open("mailto:sairajesh8262@gmail.com")
    }
    return (
        <div>
            <img src={Sai} alt="imge-hidden" className="photo"></img>
            <div className="sidebarname sidebar_item"><i>P M V S RAJESH</i></div>
            <div className="sidebar_title sidebar_item">web developer</div>

               <div className="socila_media_app sidebar_item a">
                <div className="f"> <a href=''><WorkIcon className='facebook icon' /></a>
               RESUME
            </div></div>
            <div className="socila_media_app sidebar_item a">
                <div className="f"> <a href='https://www.facebook.com/sairajesh.pinnamareddy' target="blank"><FacebookIcon className='facebook icon' /></a>
               FACEBOOK
            </div></div>
               
            
            <div className="contact sidebar_item">
            <div className="I">
                <a href='https://www.instagram.com/p.m.v.s.r.a.j.e.s.h/' target ="blank"><InstagramIcon className='instagram icon '  /></a>
            INSTAGRAM
            </div>
           
            
            </div>
            <div className="I">
                <a href='' className='git'><GitHubIcon  /></a>
            GITHUB
            </div>
            <div></div>
            <div className="sidebar_item">tanuku, westgodavari</div>
            <div className="sidebar_item">AP ,India 534211</div>
            <div className="sidebar_item">sairajesh8262@gmail.com</div>
            <div className="sidebar_item">9951696649/6303881720</div>
            <div className="sidebar_item email" onClick={emailto}>email me</div>
        </div>
    )
}

export default sidebar
