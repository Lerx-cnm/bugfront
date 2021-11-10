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
    obj = {other_dat:[{title: "not loading page", desc: "my website doesnt load thge cart page", id: 1}, {title: "website crashes when hotdog", desc: "whenever i try to upload hotdog.jpg it freaks out and crashes", id: 2}]}
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
        {this.state.isMulti === true ? <BugWindow func={this.setthestatus} obj={this.obj}/> : <BugWindowOne func={this.setthestatus} idd={this.state.idofbug} obj = {this.obj}/>}
        </div>
        </>
    )}
}

export default HomeContainer