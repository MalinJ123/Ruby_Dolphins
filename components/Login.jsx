import "./Login.css";

import { LoginContext } from "../src/ContextRoot";
import { useContext, useState } from "react";
import loginUser from "../data/loginUser";


const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoggedIn(true)

        const loginStatus = await loginUser({name: userName, password: userPassword})

        console.log(loginStatus);
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-div">
                    <div className="form-header">
                    <h3>ADMIN</h3>

                    </div>

                    <div className="input-div">
                        <label htmlFor="name">Användarnamn</label>
                        <input id="name" type="text" value={userName} onChange={handleUserNameChange} />
                    </div>

                    <div className="input-div">
                        <label htmlFor="password">Lösenord</label>
                        <input id="password" type="password" value={userPassword} onChange={handleUserPasswordChange} />
                    </div>
                    <button className="login-btn">Logga in</button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
