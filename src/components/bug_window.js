import React, { Component} from 'react'
import { connect } from 'react-redux';
import { getBugs } from '../actions/fetch_bugs'
// HEy! You should try something where like you practe rendering between two components using state and change in state. idk bro just read the stack overflow
class BugWindow extends Component{
    handleclick = (e) =>{
        this.props.func(false, e.target.id)

    }

    componentDidMount(){
        this.props.getBugs();
        localStorage.view = "index"
    }
    comp(){
        if(this.props.bug.bug !== "failure"){
            return(
                <div className = 'mainwin'>
                    {this.props.bug.bugs.map((i) => 
                        <button onClick={this.handleclick} id={i.id}><h1 id={i.id}>{i.title}</h1><p id= {i.id}>{i.desc}</p></button>)}
                </div>
            )
        }else{
            return(
                <p>loading...</p>
            )
        }
    }


    render(){
        return(
            <>
            {this.comp()}
            </>
        )
    }
}
const mapStateToProps = state =>{
    return{
        bug: state.bugs
    }
}
export default connect(mapStateToProps, { getBugs })(BugWindow) 