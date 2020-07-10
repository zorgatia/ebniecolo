import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Mamicro from "./Mamicro";

const ProjectDetail = ({ project: { project } }) => {
  return !project ? (
    <Redirect to="projects"></Redirect>
  ) : (
    <Fragment>
      <div className="site-section">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-4">
              <div className="h-100 bg-white box-29291">
                <h2 className="heading-39291">{project.titre}</h2>
                <p>{project.descp}</p>
                <Mamicro></Mamicro>

                <p className="mt-5">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={project.image}
                        alt="Image"
                        className="img-fluid"
                        width="140"
                        style={{borderRadius: "50%"}}
                      />
                    </div>
                    <div className="col-8">
                      <span className="d-block font-weight-bold text-black">
                        {project.name}
                      </span>
                      <span className="d-block font-weight-bold text-muted">
                        {project.prof}
                      </span>
                      <span className="d-block font-weight-bold text-muted">
                        {project.email}
                      </span>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              
                {project.images.map((i, c) => (
                  <div className="stage">
                    <img
                      key={c}
                      src={i}
                      alt="Image"
                      style={{ width: "750px" }}
                      className="img-fluid"
                    />
                  </div>
                ))}
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.object.isRequired
};
const mapStateToProp = state => ({
  project: state.project
});

export default connect(mapStateToProp)(ProjectDetail);
