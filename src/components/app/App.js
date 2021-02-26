import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from '../navBar/NavBar.js';
import Login from '../login/Login.js'
import SignUp from '../signUp/SignUp.js'
import HomePage from '../homePage/HomePage.js'
import ProductPage from '../productPage/ProductPage.js'
import NewListingPage from '../newListingPage/NewListingPage.js'
import Profile from '../profile/Profile.js'
import UserInfo from '../userInfo/UserInfo.js'
import { useAuth0 } from '@auth0/auth0-react'
import './App.scss'

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>The page is loadings.  Just a moment.</div>
  }

  return (
    <main>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/homepage'>
          <HomePage />
        </Route>
        <Route
          path={'/listing/:id'}
          render={({match}) => {
            return (
              <ProductPage
                id={ `${match.params.id}` }
                key={ `${match.params.id}` }
              />
            )
          }}>
        </Route>
        <Route path='/create-new-listing'>
          <NewListingPage />
        </Route>
        <Route path={'/profile'}>
          <Profile />
        </Route>
        <Route path='/about'>
          <UserInfo />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
