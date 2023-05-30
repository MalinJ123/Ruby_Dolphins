import "./Login.css";

const LoginForm = () => {
    return (
        <>
            <form action="submit">
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
                    <button className="login-btn">Logga in</button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
