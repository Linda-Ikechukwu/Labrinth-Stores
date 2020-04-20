import React from 'react';
import {Link} from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignInComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }

        
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const{email,password} = this.state;


        try{
           await auth.signInWithEmailAndPassword(email,password);
           this.setState({email: '', password : '', errorMessage: ''});
           
         

        }catch(error){
            let errorCode = error.code;

            if (errorCode === 'auth/user-not-found') {
                this.setState({
                    errorMessage :  "The Email address is incorrect. Try again"
                })
            }else if (errorCode === 'auth/wrong-password'){
                this.setState({
                    errorMessage :  "The password is incorrect. Try again"
                });
            }else if (errorCode === 'auth/invalid-email'){
                this.setState({
                    errorMessage :  "The email address is invalid. Please check !!"
                });
            }else {
                console.log(error);
            }
        }
        
    }

    handleInputChange = event => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className='title'>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <span className="errorMessage">{this.state.errorMessage}</span>
                <form onSubmit={this.handleSubmit}>
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
                    <span>  
                        <Link className='inline-link' to='/passwordreset'> Forgot Your Password?. </Link>
                    </span>
                    <Button type='submit'> Sign In </Button>
                    
                </form>
    
                <Button onClick={signInWithGoogle} isGoogleSignedIn>
                    Sign in with Google
                </Button>

                
                <span>
                    Don't have an account yet? 
                    <Link className='inline-link' to='/signup'> Sign Up. </Link>
                </span>

            </div>
        )
    }
}

export default SignInComponent;