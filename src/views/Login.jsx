import LoginForm from '../components/Login/LoginForm';

const Login = () => {
    return (
        <>
            <div className="yellow">
                <div className="grid2">
                    <div>
                        <img src="img/Logo-Hello.png" alt="Hello!" className="logo" />
                    </div>
                    <div className="rightdiv">
                        <h1 className="starth1">Lost in Translation</h1>
                        <p className="whitep">Get started</p>
                    </div>
                </div>
            </div>
            <div className="loginbox">
                <LoginForm />
            </div>
        </>
    )
}
export default Login