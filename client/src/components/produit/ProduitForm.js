import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { connect } from "react-redux";
import {addProduit} from '../../actions/produit'

const ProduitForm = ({addProduit}) => {
  const [formData, setFormData] = useState({
    nom: "",
    descp: "",
    mainImage:
      "https://res.cloudinary.com/ebniecolo/image/upload/v1566554496/users/default.jpg",
    cat: "",
    prix: "",
    stock: ""
  });
  let { nom, descp, mainImage, cat, prix, stock } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addProduit({ nom, descp, mainImage, cat, prix, stock });
  };

  const uploadWidget = e => {
    e.preventDefault();
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "ebniecolo",
          uploadPreset: "ml_default",
          folder: "produits"
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setFormData({ ...formData, mainImage: result.info.secure_url });
            document.getElementById("imageV").src = result.info.secure_url;
            // console.log("Done! Here is the image info: ", result.info);
          }
        }
      )
      .open();
  };

  const options = [
    { value: "Construction", label: "Construction" },
    { value: "Decoration interieur", label: "Decoration interieur" },
    { value: "Decoration exterieur", label: "Decoration exterieur" },
  ];

  return (
    <Fragment>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="nom"
                      value={nom}
                      placeholder="nom"
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      name="descp"
                      id=""
                      className="form-control"
                      placeholder="descp"
                      cols="30"
                      rows="3"
                      onChange={e => onChange(e)}
                    >
                      {descp}
                    </textarea>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <Select
                        isMulti
                      value={options.find(p => p.value === cat)}
                      onChange={v =>
                       // console.log(v)
                        setFormData({ ...formData, cat: v.map(o=>o.value) })
                      }
                      options={options}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      name="prix"
                      value={prix}
                      placeholder="prix"
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="stock"
                      value={stock}
                      placeholder="stock"
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-6 mr-auto">
                    <input
                      type="submit"
                      class="btn btn-block btn-primary text-white py-3 px-5 rounded-0"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4 ml-auto">
              <div class="bg-white p-3 p-md-5">
                <h3 class="heading-39291">Image</h3>
                <img
                  id="imageV"
                  style={{ height: "auto", width: "250px" }}
                  src={mainImage}
                ></img>
                <button className="form-control" onClick={e => uploadWidget(e)}>
                  Add image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProduitForm.propTypes = {
    addProduit:PropTypes.func.isRequired,
};

export default connect(null,{addProduit})(ProduitForm);
