import React from 'react'
import Nav from './nav'
import { connect } from 'react-redux'
import { sendBug } from '../actions/send_bug'


class CreateBug extends React.Component{

    handleSubmit = () =>{
        const obj = {
            sum: document.getElementById('getsum').value,
            desc: document.getElementById('getdesc').value,
            att: document.getElementById('att').value,
            priority: document.getElementById('pri').value
        }
        console.log(obj)
        this.props.sendBug(obj)
    }
    componentDidMount(){
        localStorage.view = "create"
    }
    render(){
        return(
            <>
            <Nav />
                <label>
                    Summary
                    <input id='getsum' placeholder = 'quick explanation' type={"text"} />
                </label>
                <label>
                    Description
                    <textarea id= 'getdesc' placeholder = 'describe the bug'/>
                </label>
                <label>
                    Attention
                    <select id='att' placeholder='Select...'>
                        <option value="" disabled selected hidden>Select an option</option>
                        <option value='it'>IT</option>
                        <option value='front'>Front Dev</option>
                        <option value='back'>Back Dev</option>
                        <option value='gen'>General</option>
                        <option value='full'>Full Stack</option>
                        <option value='uiux'>UI/UX</option>
                        <option value='db'>Database</option>
                        <option value="other" onSelect={console.log("testing sele")}>Other</option>
                    </select>
                </label>
                <label>
                    Priority
                    <select id='pri'>
                        <option value='' disabled selected hidden>Select an option</option>
                        <option value='0'>Non-Priority</option>
                        <option value='1'>Low</option>
                        <option value='2'>Med</option>
                        <option value='3'>High</option>
                        <option value='4'>Emergency</option>
                    </select>
                </label>
                <input type='submit' onClick={this.handleSubmit} />
            </>
        )
    }
}

export default connect(null, { sendBug })(CreateBug)
