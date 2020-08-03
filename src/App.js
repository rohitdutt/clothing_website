import React from 'react';
import './App.css';
import SignInAndSignUpPage from "./components/pages/sign-in and sign-up/sign-in and sign-up";
import {Switch,Route} from "react-router-dom";
import HomePage from "./components/pages/homepage/Homepage";
import ShopPage from "./components/pages/shop/shop";
import Header from "./components/header/header";

function App() {
  return (
    <div >
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
