import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProfItem from "./ProfItem";
import { connect } from "react-redux";
import { getProfs } from "../../actions/prof";
import Select from "react-select";

const Profs = ({ getProfs, prof: { profs, loading } }) => {
  useEffect(() => {
    getProfs();
  }, []);

  let [search, setSearch] = useState("");
  let [type, setType] = useState("all");

  const options = [
    { value: "all", label: "toutes les types" },
    { value: "Architectes", label: "Architectes" },
    { value: "Ingénieurs", label: "Ingénieurs" },
    { value: "Contrôleurs Techniques", label: "Contrôleurs Techniques" },
    { value: "Entreprises", label: "Entreprises" },
    { value: "Artisans", label: "Artisans" },
    { value: "Matériaux", label: "Matériaux" },
    { value: "Institutions", label: "Institutions" }
  ];

  const filteredprofs = profs.filter(prof => {
    if (type === "all")
      return (
        prof.nom
          .concat(prof.prenom)
          .toLowerCase()
          .indexOf(search.toLowerCase()) !== -1
      );
    else
      return (
        prof.nom
          .concat(prof.prenom)
          .toLowerCase()
          .indexOf(search.toLowerCase()) !== -1 && prof.type.includes(type)
      );
  });

  return (
    <Fragment>
      <div class="site-section">
        <div class="container">
          <div class="row justify-content-center text-center mb-5 section-2-title">
            <div class="col-md-6">
              <h2 class="heading-39291">BESOIN D’UN EXPERT ?</h2>
              <h6>
                {" "}
                Ebniecolo vous propose les meilleurs{" "}
                <span style={{ fontWeight: "bold" }}>Professionnels</span> dans
                le donain écologique
              </h6>
            </div>
          </div>

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
                placeholder="toutes les types"
                className="form-control"
                value={options.find(p => p.value === type)}
                onChange={e => setType(e.value)}
                options={options}
              />
            </div>
          </div>
          <br />
          <br />
          <div class="row align-items-stretch">
            {filteredprofs.map(prof => (
              <ProfItem key={prof._id} prof={prof} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Profs.propTypes = {
  getProfs: PropTypes.func.isRequired,
  prof: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  prof: state.prof
});

export default connect(mapStateToProps, { getProfs })(Profs);
