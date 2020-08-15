import React, {Component} from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {signInWithGoogle} from "../../firebase/firebase";

class SignIn extends Component{
    constructor(props) {
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = (event)=>{
        const {value,name} =event.target;
        this.setState({[name]:value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I Already Have Account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required/>
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <CustomButton type="submit"> Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        {''}Sign In With Google{''}
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
