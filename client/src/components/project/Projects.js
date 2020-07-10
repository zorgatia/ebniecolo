import React, { Fragment ,useEffect} from "react";
import PropTypes from "prop-types";
import ProjectItem from "./ProjectItem";
import {connect} from "react-redux"
import {getProjects} from "../../actions/project"
import {CardDeck} from 'react-bootstrap'

const Projects = ({getProjects,project:{projects,loading}}) => {
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <Fragment>
      



    <CardDeck>
      {projects.map(p=>(
              <ProjectItem key={p._id} project={p}></ProjectItem>
      ))} 
    </CardDeck>
    </Fragment>
  );
};

Projects.propTypes = {
  getProjects:PropTypes.func.isRequired,
};
const mapStateToProp= state=> ({
  project: state.project
})

export default connect(mapStateToProp,{getProjects})(Projects);
