import React from 'react'
import { getSingleBug } from '../actions/fetch_single_bug'
import { connect } from 'react-redux';


class BugWindowOne extends React.Component{
    handlesubmit = () =>{
        this.props.func(true, null)
    }
    componentDidMount(){
        localStorage.view = "show"
        this.props.getSingleBug(this.props.idd)

    }
    ticket = () =>{
        return(
            <div>
                <small>Submitted by: {this.props.bug.bug.user}</small>
                <h2>{this.props.bug.bug.name}</h2>
                <p>{this.props.bug.bug.desc}</p>

            </div>
        )
    }
    render(){
        return(
            <>
            <button onClick={this.handlesubmit}>Go back</button>
            <>
            {this.props.bug == "failure" ? "loading..." : this.ticket()}</>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        bug: state.single_bug
    }
}

export default connect(mapStateToProps, { getSingleBug })(BugWindowOne)