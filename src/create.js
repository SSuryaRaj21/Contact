import axios from "axios"
import { useState } from "react"
import { API } from "./api"

export default function Create(){
    const [firstname,setname]=useState('')
    const [lastname,setlastname]=useState('')
    const [maile,setemail]=useState('')
    const [number,setnumber]=useState('')
    const [dob,setdob]=useState(0)
    const [webname,setweb]=useState('')

    const handleclik = (e)=>{
        e.preventDefault();
        if(firstname===''){
            alert('Fill The Name..')
        }
        axios.post(API,{fname:firstname,lname:lastname,Mail:maile,Phone:number,DOB:dob,WebAdd:webname})
        setname('');
        setlastname('');
        setemail('')
        setnumber('');
        setdob('')
        setweb('')         
    }

    
    return(
        <div>
            
            <center><h3>Create Conatct</h3>

<form className="w-50" onSubmit={handleclik}>
<table className=" table  ">

    <tr className=" " >               
    <td><input type="text"  placeholder="firstname" className="form-control  mb-3"    value={firstname} onChange={(e)=>setname(e.target.value)}/></td>
                   
    </tr>
    <tr>               
    <td><input type="text"  placeholder="lastname" className="form-control mb-3" value={lastname} onChange={(e)=>setlastname(e.target.value)}/></td>                
    </tr>
    <tr>               
    <td><input type="email"  placeholder="Sample@gmail.com" className="form-control mb-3" value={maile} onChange={(e)=>setemail(e.target.value)}/></td> 

    </tr>
    <tr>               
    <td><input type="number"  placeholder="PhoneNumber" className="form-control mb-3" value={number} onChange={(e)=>setnumber(e.target.value)} /></td>                
    </tr>
    <tr>               
    <td><input type="date"  placeholder="date" className="form-control mb-3" value={dob} onChange={(e)=>setdob(e.target.value)}/></td>                
    </tr>
    <tr>               
    <td><input type="text"  placeholder="website" className="form-control mb-3" value={webname} onChange={(e)=>setweb(e.target.value)}/></td>                
    </tr>

    <tr>               
    <td><input type="submit"  value={'save'} className="  btn btn-info w-100"/></td>                
    </tr>

</table>
</form>
</center>
            
                    </div>
    )
}