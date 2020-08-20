import React, {Component} from 'react';
import './App.css';
import SignInAndSignUpPage from "./components/pages/sign-in and sign-up/sign-in and sign-up";
import {Switch,Route} from "react-router-dom";
import HomePage from "./components/pages/homepage/Homepage";
import ShopPage from "./components/pages/shop/shop";
import Header from "./components/header/header";
import {auth, createUserProfileDocument} from "./firebase/firebase";

class App extends Component {

    constructor() {
        super();
        this.state={
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({currentUser: user});
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser:{
                            id:snapshot.id,
                            ...snapshot.data()
                        }
                    });
                    console.log(this.state);
                });
            }
            this.setState({currentUser:userAuth});
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

export default App;
