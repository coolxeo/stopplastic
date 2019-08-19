import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";

import { Switch, Route, Router } from "./../../util/router.js";
import Divider from "./../../components/Divider";
import Footer from "./../../components/Footer";
import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="primary"
            spaced={true}
            logo="https://uploads.divjoy.com/logo-white.svg"
          />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Divider color="light" />
          <Footer
            color="white"
            size="medium"
            logo="https://uploads.divjoy.com/logo.svg"
            description="A short description of what you do here"
            copyright="© StopPlastic - Icons made by Freepik (Flaticons) - Photos by Cliford Mervil (Pexels)"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
