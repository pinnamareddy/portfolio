import React from 'react'
import "./about.css"

const Skillcard = ({el,el:{icon,title,about}}) =>
    <div className='col-lg-6'>
    <div className='skill-card'>
        <el.icon className='color' />
        <div class="stump">
        <h6>{title}</h6>
        <p>{about}</p>
        </div>
    </div>
    
</div>


export default Skillcard
