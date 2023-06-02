import { NavLink } from "react-router-dom"
import {useContext} from "react"
import { LoginContext } from "../src/ContextRoot";

const SettingsNavBar = () =>{
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    return(
        <>
        {isLoggedIn &&
        <div className="settings-navbar">
            <div className="navlink-div">
            <NavLink to="/users"> <button className="login-btn"> Användare </button>  </NavLink>
            <NavLink to="/products"> <button className="login-btn"> Produkter </button>  </NavLink>
            <hr />
            <NavLink to="/"> <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="login-btn"> Logga ut  </button> </NavLink>
            </div>
        </div>
        }
        
        </>
    )
}

export default SettingsNavBar