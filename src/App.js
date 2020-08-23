import React, {Component} from 'react';
import './App.css';
import SignInAndSignUpPage from "./components/pages/sign-in and sign-up/sign-in and sign-up";
import {Switch,Route} from "react-router-dom";
import HomePage from "./components/pages/homepage/Homepage";
import ShopPage from "./components/pages/shop/shop";
import Header from "./components/header/header";
import {auth, createUserProfileDocument} from "./firebase/firebase";
import {connect} from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {

    unsubscribeFromAuth = null

    componentDidMount() {

        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({currentUser: user});
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                   setCurrentUser({
                            id:snapshot.id,
                            ...snapshot.data()
                   });
                });
            }
            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
