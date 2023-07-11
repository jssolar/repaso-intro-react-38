import React from "react";
import css from "./Heading.module.css";
import PropTypes from 'prop-types'
const Heading = (props) => {
  return (
    <div>
      <h1 className={props.className + " " + css.background}>{props.text}</h1>
    </div>
  );
};

export default Heading;

Heading.propTypes={
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
