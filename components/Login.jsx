const LoginForm = () => {
    return (
        <>
            <form action="submit">
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="password"></label>
                    <input type="password" />
                </div>
                <button>Logga in</button>
            </form>
        </>
    );
};

export default LoginForm