import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProf, delProf } from "../../actions/prof";
import { connect } from "react-redux";
const ProfItem = ({
  getProf,
  delProf,
  auth: { isAuthenticated },
  prof: { _id, nom, prenom, email, type, image, fix, mob, site }
}) => {
  const onEdit = e => {
    getProf(_id);
  };
  const onDelete = e => {
    delProf(_id);
  };

  return (
    <Fragment>
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="post-entry-1 h-100 bg-white text-center">
          <a href="#" class="d-inline-block">
            <img src={image} alt="Image" class="img-fluid" />
          </a>
          <div class="post-entry-1-contents">
            <span class="meta">{type}</span>
            <h2>
              {nom} {prenom}
            </h2>
            
            <p>
              Eamil: {email}
              {fix!=="" && (<Fragment><br /><span>tel:{fix}</span></Fragment>) }
              {mob!=="" && (<Fragment><br /><span>mobile:{mob}</span></Fragment>) }
              {site!=="" && (<Fragment><br /><span>siteweb:{site}</span></Fragment>) }
            </p>
            {isAuthenticated && (
              <Fragment>
                <Link to="profedit" className="btn" onClick={e => onEdit(e)}>
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={e => onDelete(e)}>
                  Remove
                </button>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProfItem.propTypes = {
  getProf: PropTypes.func.isRequired,
  delProf: PropTypes.func.isRequired
};
const mapStateToProp = state => ({
  auth: state.auth
});

export default connect(mapStateToProp, { getProf, delProf })(ProfItem);
