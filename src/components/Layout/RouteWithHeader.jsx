import React from 'react';
import { Route } from 'react-router-dom';

import Menu from '../../menu/menu';
import PredefinedPropTypes from "../../constants/Proptypes";
import Footer from "../../containers/Footer/Footer";

const RouteWithHeader = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <>
        <Menu />
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
