import React from 'react'

class BugWindowOne extends React.Component{
    handlesubmit = () =>{
        this.props.func(true, null)
    }
    render(){
        return(
            <>
            <p>Testing {this.props.idd}</p>
            <button onClick={this.handlesubmit}>{this.props.obj.other_dat[0].title}</button>
            </>
        )
    }
}

export default BugWindowOne