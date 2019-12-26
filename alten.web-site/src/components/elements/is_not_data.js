import React from "react";
import PropTypes from "prop-types";

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function IsNotData({ descriptor }) {
  return (
    <div className="information-container d-flex flex-dir--col">
      <HighlightOffIcon className="information-container--icon"/>
      <div className="information-container--content d-flex flex-dir--col">
        <p>{descriptor}</p>
      </div>
    </div>
  );
}

IsNotData.propTypes = {
  descriptor: PropTypes.string.isRequired
};