import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./home_page";
import Create from "./create";
import Nopage from "./nopage";
import Navbar from "./navbar";
import View from "./view";
import Edit from "./edit";
 
 
 
 export default function App(){
  return(
    <div className="container" >
      <Navbar></Navbar>
    
       
    <BrowserRouter>
    <Routes>
       <Route  path="/" element={<Homepage></Homepage>}/>
       <Route path="/new"  element={<Create></Create>}/>
       <Route path="/view" element={<View></View>} />
       <Route path="/edit" element={<Edit></Edit>}/>
       <Route path="*" element={<Nopage></Nopage>}/>
    </Routes>
    
    </BrowserRouter>


 
 
    </div>
  )
 }