import "./Login.css";

import { LoginContext } from "../src/ContextRoot";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";


const LoginForm = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    const {setShowLoginForm} = useContext(LoginContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const handleClick = () => {
        setShowLoginForm(false)
        setIsLoggedIn(true)
        console.log("Inloggad? ", isLoggedIn);
    }
    


    return (
        <>
            <form className="main-form" onSubmit={handleSubmit}>
                <div className="form-div">
                    <div className="form-header">
                    <h3>ADMIN</h3>
                    </div>

                    <div className="input-div">
                        <label htmlFor="name">Användarnamn</label>
                        <input id="name" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="password">Lösenord</label>
                        <input id="password" type="password" />
                    </div>

                    <div className="login-div">
                   <Link to="/products">
                   <button onClick={handleClick} type="submit" className="login-btn">Logga in</button>
                    </Link> 
                    </div>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
