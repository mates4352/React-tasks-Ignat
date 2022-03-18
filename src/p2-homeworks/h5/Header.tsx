import React from 'react'
import { NavLink } from 'react-router-dom'

import {PATH} from "./RoutesLink";

function Header() {
    return (
        <ul>
           <li><NavLink to={'./'}>link1</NavLink></li>
           <li><NavLink to={PATH.PRE_JUNIOR}>link2</NavLink></li>
           <li><NavLink to={PATH.ERROR}>link3</NavLink></li>
        </ul>
    )
}

export default Header
