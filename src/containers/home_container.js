import React from 'react'
import BugWindow from "../components/bug_window"
import BugWindowOne from "../components/bug_window_one"
import Nav from '../components/nav'

class HomeContainer extends React.Component{
    constructor(props){
        super()
        this.state = {
            isMulti: true
        }
    }
    setthestatus = (arg) =>{
        this.setState({
            isMulti: arg
        })
    }
    render(){
    return(
        <>
        <div className={'navbar'}>
            <Nav />
        </div>
        <div className={'bugs'}>
        {this.state.isMulti === true ? <BugWindow func={this.setthestatus}/> : <BugWindowOne func={this.setthestatus}/>}
        </div>
        </>
    )}
}

export default HomeContainer