import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log('from Prote', props.loggedIn)
  return (
    <Route>
      {
        props.loggedIn === true ? <Component {...props} /> : <Redirect to="/sign-in"/>
      }
    </Route>
  );
};

export default ProtectedRoute;
