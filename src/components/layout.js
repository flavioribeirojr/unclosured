import React from "react";
import PropTypes from "prop-types";
import Sidebar from './sidebar';
import Header from './header';
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <main>
        { children }
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
