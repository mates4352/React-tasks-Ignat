import React from 'react'
import Header from './Header'
import RoutesLink from './RoutesLink'
import {BrowserRouter} from "react-router-dom";

function HW5() {
   return (
       <div>
          <BrowserRouter>
             <Header/>
             <RoutesLink/>
          </BrowserRouter>
       </div>
   )
}

export default HW5
