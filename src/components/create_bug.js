import React from 'react'

class CreateBug extends React.Component{



    render(){
        return(
            <form>
                <label>
                    Title
                    <input type={"text"} />
                </label>
                <label>
                    pictures
                    <input type="file" />
                </label>
                <label>
                    describe problem
                    <input type="textarea" />
                </label>
            </form>
        )
    }
}

export default CreateBug