import React from 'react'

class BugWindowOne extends React.Component{
    handlesubmit = () =>{
        this.props.func(true, null)
    }
    render(){
        return(
            <>
            <p>Testing {this.props.idd}</p>
            <button onClick={this.handlesubmit}>{this.props.obj.other_dat.map((i) => {
                {/* console.log(this.props.idd) */}
                    if(i.id == this.props.idd){
                        return this.props.obj.other_dat[this.props.idd].title
                    }else{
                        {/* console.log(i.id) */}
                    }
            })}</button>
            </>
        )
    }
}

export default BugWindowOne