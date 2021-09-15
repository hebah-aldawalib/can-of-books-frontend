import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from "./BeastBook";
import Login from "./Login";
import Profile from "./Profile";

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
    return (
      <>
             <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <Login/>
              <BestBooks/>
              
            </Route >
            <Route exact path="./Profile">
            <Profile/>

            
            </Route >
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;













// <>

// <Header user={this.state.user} onLogout={this.logoutHandle} />
//         < BrowserRouter>

//           <Switch>
//             <Route exact path="/" >

//               <Login/>
//               <BestBooks/>
//             </Route>

//          <Route exactpath="./Profile">
//            <Profile/>
//          </Route>

//         </Switch>
//           {/* <Footer /> */}
//           < BrowserRouter/>
//       </>
//     );
//   }
// }

// export default App;