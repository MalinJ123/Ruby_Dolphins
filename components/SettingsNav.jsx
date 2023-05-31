import { NavLink } from "react-router-dom"

const SettingsNavBar = () =>{
    return(
        <>
        <div className="settings-navbar">
            <div className="navlink-div">
            <NavLink to="/users"> <button className="login-btn"> Användare </button>  </NavLink>
            <NavLink to="/products/admin"> <button className="login-btn"> Produkter </button>  </NavLink>
            <hr />
            <NavLink to="/"> <button className="login-btn"> Logga ut  </button> </NavLink>
            </div>
        </div>
        
        </>
    )
}

export default SettingsNavBar