import React,{ useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
function Mainbar() {
   const [active,setActive] = useState("About")
   useEffect(() => {
    let url = window.location.href
    console.log(url)
    if(url.endsWith('/'))
    setActive("About")
    else if(url.endsWith('/projects'))
    setActive("Projects")
    else if(url.endsWith('/resume'))
    setActive("Resume")
    }, [active])
   
    return (
        <div className="main_bar">

            <div className="active">{active}</div>
            <div className="rest">
                {active!=='About' && <Link to="/"><div className="ser" onClick={()=>setActive("About")} >About</div></Link>}
                {active!=='Resume' && <Link to="/resume"><div className="ser" onClick={()=>setActive("Resume")} >Resume</div></Link>}
                {active!=='Projects' && <Link to="/projects"><div className="ser" onClick={()=>setActive("Projects")} >Projects</div></Link>}
                
           
            </div>
        </div>
    )
}

export default Mainbar
