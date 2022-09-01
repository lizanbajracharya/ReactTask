import React from "react";
import Home from "./Home";
import ErrorBoundary from "../components/ErrorBoundary";

const Main = () => {
  return (
    <div>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
