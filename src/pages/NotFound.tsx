import React from "react";
import { Link } from "react-router-dom";
import { AppLink } from "../components/AppLink";

const NotFound: React.FC = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <AppLink to="/">Go to the home page</AppLink>
      </p>
    </div>
  );
};

export default NotFound;
