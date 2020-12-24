import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Netflix from "./components/Netflix/Netflix";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/signup";
import Profile from "./components/Netflix/Profile";
import Error from "./components/Error/Error";
import { FirebaseContext } from "./context/context";
import "./index.css";
function App() {
  const { currentUser, user } = React.useContext(FirebaseContext);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          {user && (
            <Route path="/netflix">
              <Netflix />
            </Route>
          )}
          {user && (
            <Route path="/profile">
              <Profile user={currentUser} />
            </Route>
          )}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
