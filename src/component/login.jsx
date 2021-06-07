import React, { Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mobile_number : "",
            valid_number : ""
         }
    }
    handleChange = (event) =>{
        console.log('changes')
        this.setState({
            mobile_number : event.target.value,
            valid_number : (event.target.value.length > 10 || event.target.value.length < 10 ? "Number is in valid" : "")
        })
    }
    submit = (event) =>{
        event.preventDefault()
        const {mobile_number} = this.state
    } 

    render() { 
        return (
            <div className="div">
                <form onSubmit={this.submit}>
                <label>
                    Enter your mobile number.
                </label>
                <br/>
                <input type="text"  pattern="[0-9]*" name="mobile_number" value={this.state.mobile_number} onChange={this.handleChange} placeholder="Enter Your Mobile Number" /><br/>
                <p>{this.state.valid_number}</p>
                <button >Login</button>
            </form>
        </div> 
            
         );
    }
}
 
export default Login;