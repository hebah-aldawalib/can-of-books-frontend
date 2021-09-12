import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MyFavoriteBooks from "./BestBooks";
import Login from "./Login";
import Profile from "./components/Profile";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    console.log("app" ,this.props);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <MyFavoriteBooks/>
              <Login/>
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
         <Rout exactpath="profule">
           <Profile/>
         </Rout>
        
        </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
