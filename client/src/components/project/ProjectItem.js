import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProject, delProject } from "../../actions/project";
import {Card,} from 'react-bootstrap'
const ProjectItem = ({
  getProject,
  delProject,
  auth: { isAuthenticated },
  project: { _id, titre, nom, datef, mainImage }
}) => {
  const onEdit = e => {
    getProject(_id);
  };
  const onDelete = e => {
    delProject(_id);
  };
  return (
    <Fragment>
      

      <Card>
    <Card.Img as={Link} to="/project" onClick={e=>getProject(_id)} variant="top" src={mainImage} />
    <Card.Body>
      <Card.Title>{titre}</Card.Title>
      <Card.Text>
        realiser par: {nom}
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">achever le: {datef.substr(0, 10)}</small>
    </Card.Footer>
  </Card>
    </Fragment>
  );
};

ProjectItem.propTypes = {
  getProject: PropTypes.func.isRequired,
  delProject: PropTypes.func.isRequired
};
const mapStateToProp = state => ({
  auth: state.auth
});
export default connect(mapStateToProp, { getProject, delProject })(ProjectItem);
