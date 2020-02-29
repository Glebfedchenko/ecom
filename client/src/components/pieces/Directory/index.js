import React from "react";
import MenuItem from "../MenuItem";
import { connect } from "react-redux";

import "./index.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../../redux/directory/selectors";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default connect(
  createStructuredSelector({ sections: selectDirectorySections })
)(Directory);
