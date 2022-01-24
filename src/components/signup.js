import React from 'react'

class Signup extends React.Component {

    componentDidMount(){
        localStorage.view = "signup"
    }
    handleSubmit = () =>{
        localStorage.href = window.location.href
    }
    render(){
        return(
            <>
            <form>
                <label>
                    Name: 
                    <input type='text'/>
                </label>
                <label>
                    Groupname:
                    <input type='text'/>
                </label>
                <input type='submit' onClick={this.handleSubmit} />
            </form>
            </>
        )}
}

export default Signup;