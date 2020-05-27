import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';
import SignUp from './pages/sign-up-page/sign-up-page.component';
import SignIn from './pages/sign-in-page/sign-in-page.component';
import ResetPasswordPage from './pages/reset-password-page/reset-password-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions'



class App extends React.Component {
   
  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;
    //on google sign in, get the user authentication object
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        //onshapshot checks for updates to the reference and returns the current data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      
      }else{
        //set state to null (userAuth returns null if no user is signed in)
        setCurrentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route  path='/shop' component={Shoppage} />
          <Route  exact path='/signin' render={() => 
             this.props.currentUser ? (<Redirect to='/' />) : (<SignIn/>)
          } />
          <Route  exact path='/signUp'  render={() => 
             this.props.currentUser ? (<Redirect to='/' />) : (<SignUp/>)
          } />
          <Route  path='/passwordreset' component={ResetPasswordPage} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);