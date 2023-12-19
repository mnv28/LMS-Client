import React, { useContext } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const { state, dispatch } = useContext(UserContext);

  if (!state) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Protected;
