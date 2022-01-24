import React from 'react'
import BugWindow from "../components/bug_window"
import BugWindowOne from "../components/bug_window_one"
import CreateBug from '../components/create_bug'
import Nav from '../components/nav'

class HomeContainer extends React.Component{
    constructor(props){
        super()
        this.state = {
            isMulti: true
        }
    }
    setthestatus = (status, id) =>{
        this.setState({
            isMulti: status,
            idofbug: id
        })
        console.log(this.state.idofbug)
    }
    render(){
    return(
        <>
        <div className={'navbar'}>
            <Nav />
        </div>
        <div className={'bugs'}>
        {this.state.isMulti === true ? <BugWindow func={this.setthestatus}/> : <BugWindowOne func={this.setthestatus} idd={this.state.idofbug}/>}
        </div>
        </>
    )}
}

export default HomeContainer