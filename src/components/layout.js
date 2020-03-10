import React from "react";
import PropTypes from "prop-types";
import Sidebar from './sidebar';
import LayoutContent from './layout-content';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <LayoutContent>
        { children }
      </LayoutContent>
      <ToastContainer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
