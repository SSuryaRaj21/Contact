import { Link } from 'react-router-dom'
import './nopage.css'
export default function Nopage(){
    return(
        <div>
         <center>
             <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">OOPS!  404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		 <Link to={'/'}><button className='btn btn-primary'>Go To Home</button></Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
         </center>
        </div>
    )
}