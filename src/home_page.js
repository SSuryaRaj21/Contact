import { Link } from 'react-router-dom'
import './app.css'
import { Home_logo } from './img '

export default function Homepage(){
    return(
       <div className='home1'>
         <div className="home ">
<center>    <div>    <img src={Home_logo} width={'500px'} alt='gLogo'/> </div>
<div>

<Link to={'/new'} className='pe-3'><button className='btn btn-outline-primary pe-3 ' >Create Contact</button></Link>
<Link to={'/view'}><button className='btn btn-outline-primary '>Read Contact</button></Link>
</div>

</center> 
           
        </div>
       </div>
    )
}