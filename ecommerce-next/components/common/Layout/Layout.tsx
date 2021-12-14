import { FC } from "react";
// FC Functional Component

const Layout: FC = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
