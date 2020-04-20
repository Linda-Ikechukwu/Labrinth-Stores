import React from 'react';
//import {Link} from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth } from '../../firebase/firebase.utils';

import './reset-password.styles.scss';

class ResetPasswordComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',

        }

        
    }

    handleInputChange = event => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    }

    handleSubmit = async event => {
        event.preventDefault()
        const{email} = this.state;

        try{
           await auth.sendPasswordResetEmail(email);
           this.setState({email: ''});
           alert('Password Reset Email has been sent to Your Email Inbox')

        }catch(error){
            let errorCode = error.code;

            if (errorCode === 'auth/user-not-found') {
                this.setState({
                    errorMessage :  "The Email address is incorrect. Try again"
                })
            }else if (errorCode === 'auth/invalid-email'){
                this.setState({
                    errorMessage :  "The email address is invalid. Please check !!"
                });
            }else {
                console.log(error);
            }
        }
    }

    render(){
        return(
            <div className="reset-password">
                <h2 className='title'>Reset Your Password</h2>
                <span>
                    Please enter the e-mail address associated with your Labrinth Clothing account. 
                    We will send you a link to this e-mail address to reset your password
                </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                       name ='email'
                       type = 'email'
                       handleInputChange = {this.handleInputChange}
                       value = {this.state.email}
                       label = "Email"
                       required
                    />

                    <Button type='submit'> Reset Password </Button>
                    
                </form>
        
            </div>
        )
    }
}

export default ResetPasswordComponent