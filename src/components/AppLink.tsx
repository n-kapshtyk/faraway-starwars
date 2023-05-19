import React from "react";
import { Link, To } from "react-router-dom";

interface AppLinkProps {
  children: React.ReactNode;
  to: To;
}

export const AppLink: React.FC<AppLinkProps> = ({ children, to }) => {
  return (
    <Link
      className="text-[#00b96b] hover:text-[#00b96b] hover:opacity-70"
      to={to}
    >
      {children}
    </Link>
  );
};
