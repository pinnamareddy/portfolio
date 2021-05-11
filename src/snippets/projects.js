import React from 'react'
import './about.css'
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';

const project =[
    {
      
       title:"Todolist",
       about:"A basic website using html, css, javascript and local storage to store the data (to avoid the data losing while refreshing local storage is used)",
       Github_URL:"https://github.com/pinnamareddy/new-todolist",
        Web_link:"https://affectionate-mayer-004e08.netlify.app/?todos=all"
    },
     {
      title:"Drive clone",
      about:"A basic website using  html css javascript  React js as framework and Firebase to store the data and  you can view the data(did not add the feature download)",
      Github_URL:"https://github.com/pinnamareddy/drive",
       Web_link:"https://jolly-bhaskara-d326c9.netlify.app/"
     },
     {
      title:"Time_Reminder",
       about:"This is my favourite i have created this website for my cousin, exam reminder with animation in it used basic html css and javascript",
       Github_URL:"https://github.com/pinnamareddy/time-reminder",
        Web_link:"https://nifty-kowalevski-2b42d8.netlify.app/"
   },
   {
     title:"tinder",
     about:"This is my first FULLSTACK project of using React to create frontend and node.js, express to create backend and mongodb to store data",
     Github_URL:"https://github.com/pinnamareddy/tinder",
      Web_link:"https://zealous-johnson-a65d92.netlify.app/"
    }
]
function projects() {
    return (
        <div className="t about" >
           <h1>Projects</h1>
            
            <div className="container about_container">
               <div className='se row'>
               {
project.map(e=>
   <div className="col-lg-6"><h4>{e.title}</h4>
   <p>{e.about}</p>
   <a href={e.Github_URL} target="blank"><IconButton><GitHubIcon /></IconButton> github link</a> <a href={e.Web_link}><IconButton><WebIcon /></IconButton> web_link</a> </div>
   
   )
   
               }</div>
            </div>
        </div>
    )
}

export default projects