import React from "react";
import './PrivateRoute.css';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  let location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loader">
        <span className="span"></span>
        <span className="span"></span>
        <span className="span"></span>
        <span className="span"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;
