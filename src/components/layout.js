import React from "react";
import PropTypes from "prop-types";
import Sidebar from './sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main>
        { children }
      </main>
      <ToastContainer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
