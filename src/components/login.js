const Login = (props) =>{
    return (
        <div className={'login form'}>
            <form>
                <label>
                    Username:
                    <input type ='text'/>
                </label>
                <label>
                    Password:
                    <input type='text'/>
                </label>
                <input type='submit' value='Login'/>
            </form>
        </div>
    )}

export default Login