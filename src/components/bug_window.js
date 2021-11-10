import React from 'react'
// HEy! You should try something where like you practe rendering between two components using state and change in state. idk bro just read the stack overflow
class BugWindow extends React.Component{
    handleclick = (e) =>{
        this.props.func(false, e.target.id)

    }


    render(){
        return(
            <div className = 'mainwin'>
                {this.props.obj.other_dat.map((i) => 
                    <button onClick={this.handleclick} id={i.id}><h1 id={i.id}>{i.title}</h1><p id= {i.id}>{i.desc}</p></button>)}
                {/* <button onClick={this.handleclick}><h1>Hello there</h1><p>This is kinda weird</p></button> */}
            </div>
        )
    }
}
export default BugWindow 