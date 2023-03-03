import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import { FaInfoCircle } from "react-icons/fa";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { ProtectedRoute } from "./hooks";
import { Login, PageNotFound } from "./view/Auth";
import {
  AccountSettings,
  Overview,
  UserManagement,
  Services,
  Support,
  Transactions,
  ResidentInfo,
} from "./view/Dashboard";
// import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Authentication */}
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/login" component={Login} />

          {/* Dashboard Routes */}
          <ProtectedRoute path="/dashboard" component={Overview} />
          <ProtectedRoute path="/estate" component={UserManagement} />
          <ProtectedRoute path="/residents" component={Services} />
          <ProtectedRoute path="/manager" component={Transactions} />
          <ProtectedRoute path="/transactions" component={ResidentInfo} />
          <ProtectedRoute path="/reports" component={Support} />
          <ProtectedRoute path="/settings" component={AccountSettings} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
      <div className="screen-size-message text-center">
        <FaInfoCircle fontSize="5rem" />
        <div>This dashboard's mobile/tablet is currently not available.</div>
        <div className="mt-3">
          For best experience, We recommend you access the dashboard with{" "}
          <b>Google Chrome, Mozilla Firefox or any other suitable browser </b>{" "}
          on a<b> DESKTOP or LAPTOP</b> device!
        </div>
      </div>
    </>
  );
}

export default App;
