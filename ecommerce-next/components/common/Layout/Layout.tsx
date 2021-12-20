import { FC } from "react";
import Footer from "@components/common/Footer";
// FC Functional Component
import style from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={style.root}>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
