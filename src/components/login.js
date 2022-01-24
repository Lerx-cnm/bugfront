import Nav from './nav'
import { Link } from 'react-router-dom'


localStorage.view = "login"


const Login = (props) =>{
    return (
        <>
        <Nav />
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
        <Link to='/signup'>Signup</Link>
        </>
    )}

export default Login