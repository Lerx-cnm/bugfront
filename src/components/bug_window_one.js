import React from 'react'

class BugWindowOne extends React.Component{
    handlesubmit = () =>{
        this.props.func(true)
    }
    render(){
        return(
            <>
            <p>Testing {this.props.ide}</p>
            <button onClick={this.handlesubmit}>Test me to go back</button>
            </>
        )
    }
}

export default BugWindowOne