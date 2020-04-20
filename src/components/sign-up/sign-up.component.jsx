import React from 'react';
import {Link} from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {auth, createUserProfileDocument, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUpComponent extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            document.querySelector('.errorMessage').textContent = "Passwords don't match";
            return;
        }

        try{
           const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await  createUserProfileDocument(user, {displayName})

            //reset state
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                errorMessage:''
            });


        }catch(error){
            let errorCode = error.code;

            if (errorCode === 'auth/weak-password') {
                this.setState({
                    errorMessage :  "Password is too weak."
                })
            }else if (errorCode === 'auth/email-already-in-use'){
                this.setState({
                    errorMessage :  "Account with email already exists"
                });
            }else {
                console.log(error);
            }
        }
        console.log(this.state);
    };

    handleInputChange = event => {
        const {value, name} = event.target;
        this.setState({[name] : value})

        
    }

    render(){
        return(
            <div className="sign-up">
                <h2 className='title'>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <span className="errorMessage">{this.state.errorMessage}</span>
                <form onSubmit={this.handleSubmit}>
                   <FormInput
                       name ='displayName'
                       type = 'text'
                       handleInputChange = {this.handleInputChange}
                       value = {this.state.displayName}
                       label = "Name"
                       required
                    />
                    <FormInput
                       name ='email'
                       type = 'email'
                       handleInputChange = {this.handleInputChange}
                       value = {this.state.email}
                       label = "Email"
                       required
                    />
                    <FormInput
                       name ='password'
                       type = 'password'
                       handleInputChange = {this.handleInputChange}
                       value = {this.state.password}
                       label = "Password"
                       required
                    />
                    <FormInput
                       name ='confirmPassword'
                       type = 'password'
                       handleInputChange = {this.handleInputChange}
                       value = {this.state.confirmPassword}
                       label = "Confirm Password"
                       required
                    />
                    <Button type='submit'> Sign Up </Button>
                    
                </form>
    
                <Button onClick={signInWithGoogle} isGoogleSignedIn>
                    Sign Up with Google
                </Button>
                
                <span>
                    Already have an account?  
                    <Link className='inline-link' to='/signin'> Sign In. </Link>
                </span>

            </div>
        )
    }
}

export default SignUpComponent;