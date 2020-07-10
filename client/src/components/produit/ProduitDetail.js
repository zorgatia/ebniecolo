import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ProduitDetail = ({ produit: { produit } }) => {
  return !produit ? (
    <Redirect to="produits"></Redirect>
  ) : (
    <Fragment>
      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto">
              <img src={produit.mainImage} alt="Image" class="img-fluid" style={{width:"inherit"}} />
            </div>

            <div class="col-md-6">
              <div class="details col-md-12">
                <h3 class="title">{produit.nom}</h3>

                <p class="product-description">{produit.descp}</p>
                <h4 class="price">
                  Prix:{" "}
                  <span style={{ color: "#000000" }}>{produit.prix} DT</span>
                </h4>

                <div class="action">
                  <button class="add-to-cart btn btn-default" type="button">
                    add to cart
                  </button>
                  <button class="like btn btn-default" type="button">
                    <span class="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProduitDetail.propTypes = {};
const mapStateToProp = state => ({
  produit: state.produit
});

export default connect(mapStateToProp)(ProduitDetail);
