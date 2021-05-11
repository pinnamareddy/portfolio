import React from 'react'
import './about.css'
import Skillcard from './skillcard.js'
import CodeIcon from '@material-ui/icons/Code';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const skills =[
    {
       icon:AddToQueueIcon,
       title:"FRONTEND DEVELOPMENT",
       about:"I can build a websites with HTML, CSS AND REACT.js and also responsive" 
    },
    {
        icon:ExitToAppIcon,
        title:"BACKEND DEVELOPMENT",
        about:"handling database using the mongodb and backend server using nodejs, express" 
     },
     {
      icon:CodeIcon,
      title:"COMPETATIVE CODER",
      about:"a daily problem solver in basic algorithm and datastructures like hakathons" 
   }
    
    
     
]
function about() {
    return (
        <div className="t about" >
           <h1>P M V S RAJESH</h1>
            <p><i>web developer</i></p>
            <div className="container about_container">
               <h3 className="about_heading">Technologies I learn</h3>
               <div className='se row'>
               {
skills.map(el=>
      <Skillcard  el ={el}/>
       )
               }</div>
            </div>
        </div>
    )
}

export default about

