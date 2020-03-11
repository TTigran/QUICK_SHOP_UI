import React from 'react';
import { Route } from 'react-router-dom';
import PredefinedPropTypes from "../../constants/Proptypes";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";

const RouteWithHeader = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <>
        <Header/>
        <div className="section">
          <Component {...props} />
        </div>
        <Footer/>
      </>
    )}
  />
);

RouteWithHeader.propTypes = {
  children: PredefinedPropTypes.children
};

export default RouteWithHeader;
