import React from 'react'
import './about.css'
const qualification = [{
    tenth:"10th passed from the state board of AP with 8.8 grade points",
    inter:"12th passed from the state board of AP with 96%",
    btech :"KLUNIVERSITY, Vijayawada",
    CGPA : "CGPA:- 7.05/10 student in electronics and communication engineering"

}]
const languages =[
    {
       
        title:"c programing",
        level:"90%" 
     },
    {
       
       title:"html & css",
       level:"90%" 
    },
    {
        
        title:"javascript",
        level:"80%" 
     },
     {
       
        title:"bootstrap",
        level:"70%"
     },
     {
         
         title:"react",
         level:"65%"
      },{
       
        title:"nodejs",
        level:"45%" 
     },
     {
         
         title:"mongodb",
         level:"45%" 
      },
      {
         
        title:"express",
        level:"45%" 
     }
    
     
]
function resume() {
    return (
        <div className="t about" >
           <h4>Education:-</h4>
            <ul>{qualification.map(e =>
            <div><span><li>{e.btech}</li>
            <p>{e.CGPA}</p></span>
           <div><li>{e.inter}</li></div> 
                <li>{e.tenth}</li>
               </div>
                )}
            
            
            </ul>
            <div className="container about_container">
               <h6 className="about_heading">languages</h6>
               <div className="container">
               <div className='jumpse row'>
               {
languages.map(el=><div className='col-lg-6 jump'><p>{el.title}</p>
<div class='bar'><div class="est" style={{width:el.level}}></div></div></div>
     
       )
               }</div>
               </div>
               
            </div>
        </div>
    )
}

export default resume