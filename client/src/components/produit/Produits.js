import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProduitItem from "./ProduitItem";
import Select from "react-select";
import { connect } from "react-redux";

import { getProduits } from "../../actions/produit";

const Produits = ({ produit: { produits }, getProduits }) => {
  useEffect(() => {
    getProduits();
  }, []);

  let [search, setSearch] = useState("");
  let [cat, setCat] = useState("all");

  const options = [
    { value: "all", label: "toutes les catégories" },
    { value: "Construction", label: "Construction" },
    { value: "Decoration interieur", label: "Decoration interieur" },
    { value: "Decoration exterieur", label: "Decoration exterieur" },
  ];

  const filteredproduits = produits.filter(produit => {
    if (cat === "all")
      return produit.nom.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    else
      return (
        produit.nom.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
        produit.cat.includes(cat)
      );
  });
  return (
    <Fragment>
      <div class="site-section">
        <div class="container">
          <div class="row justify-content-center text-center mb-5 section-2-title">
            <div class="col-md-6">
              <h2 class="heading-39291">BESOIN DE MATERIAUX ?</h2>
              <h6>
                Ebniecolo vous propose les 
                <span style={{ fontWeight: "bold" }}> Produits <span style={{ color:"red" }}>100%</span> écologique</span>
              </h6>
            </div>
          </div>
          <div class="row  mb-5">
            <div class="col-md-12">
              <div className="row">
                <div className="col-7">
                  <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Rechercher"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-5">
                  <Select
                    placeholder="toutes les catégories"
                    className="form-control"
                    value={options.find(p => p.value === cat)}
                    onChange={e => setCat(e.value)}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row align-items-stretch">
            {filteredproduits.map(produit => {
              return (
                <ProduitItem key={produit._id} produit={produit}></ProduitItem>
              );
            })}

            <div class="col-12">
              <span class="p-3">1</span>
              <a href="#" class="p-3">
                2
              </a>
              <a href="#" class="p-3">
                3
              </a>
              <a href="#" class="p-3">
                4
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Produits.propTypes = {};

const mapStateToProp = state => ({
  produit: state.produit
});

export default connect(mapStateToProp, { getProduits })(Produits);
