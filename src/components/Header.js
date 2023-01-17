import './Header.css'
import { NavLink } from "react-router-dom"
export default function Header (){
    return(
        <div>
           <nav>
            <ul>
                <li><NavLink className="home" to="/">Home</NavLink></li>
                <li><NavLink className="note" to="/note">Note</NavLink></li>
                <li><NavLink className="about" to="/about">About</NavLink></li>
                <li><NavLink className="create" to="/create">Create</NavLink></li>
            </ul>
            </nav> 
        </div>
    )
}