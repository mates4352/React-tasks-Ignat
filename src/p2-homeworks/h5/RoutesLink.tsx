import React from 'react'
import {Route, Routes} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

export const PATH = {
   PRE_JUNIOR: '/pre-junior',
   ERROR: '/error404'
}

function RoutesLink() {
   return (
       <Routes>
          <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
          <Route path={PATH.ERROR} element={<Error404/>}/>
       </Routes>
   )
}

export default RoutesLink
