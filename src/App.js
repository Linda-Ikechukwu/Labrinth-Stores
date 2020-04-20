import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';
import SignUp from './pages/sign-up-page/sign-up-page.component';
import SignIn from './pages/sign-in-page/sign-in-page.component';
import ResetPasswordPage from './pages/reset-password-page/reset-password-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      currentUser : null
    }

    
  }
   
  unsubscribeFromAuth = null;

  componentDidMount(){
    //on google sign in, get the user authentication object
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        //onshapshot checks for updates to the reference and returns the current data
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      
      }else{
        //set state to null (userAuth returns null if no user is signed in)
        this.setState({currentUser: userAuth})
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route  path='/shop' component={Shoppage} />
          <Route  path='/signin' component={SignIn} />
          <Route  path='/signUp' component={SignUp} />
          <Route  path='/passwordreset' component={ResetPasswordPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;