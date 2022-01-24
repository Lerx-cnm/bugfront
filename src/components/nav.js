import React from 'react'
import { Link } from 'react-router-dom'
class Nav extends React.Component{
    render(){
        return(
            <div className={'navs'}>
                    <Link to="/new">New</Link>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
            </div>
        )
    }
}

export default Nav