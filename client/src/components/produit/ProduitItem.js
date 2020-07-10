import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProduit } from "../../actions/produit";

const ProduitItem = ({
  produit: { _id, nom, prix, stock, mainImage },
  getProduit
}) => {
  return (
    <Fragment>
      <div class="col-lg-3 col-md-6 mb-5">
        <div class="post-entry-1 h-100">
          <div class="post-entry-1-contents">
            <Link to="/produit" onClick={e => getProduit(_id)}>
              <img
                style={{ height: "200px", width: "215px" }}
                src={mainImage}
              ></img>
            </Link>
            <h2>
              <a href="#">{nom}</a><br/>
              
            </h2>
            <h6>{stock > 0 ? (<span style={{color:'green'}}>En Stock</span>) : <span style={{color:'red'}}>Hors Stock</span>} <span style={{color:'red',float:'right'}}>{prix} DT</span> </h6>
            <p class="my-3">
              <Link
                to="/produit"
                class="more-39291"
                onClick={e => getProduit(_id)}
              >
                Plus de detail
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProduitItem.propTypes = {
  getProduit: PropTypes.func.isRequired
};

export default connect(null, { getProduit })(ProduitItem);
