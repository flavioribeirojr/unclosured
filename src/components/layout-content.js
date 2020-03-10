import React from "react";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';
import "./layout.css";

const LayoutContent = ({ children }) => {
  return (
    <main>
      { children }
    </main>
  );
}

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutContent
