import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addProject } from "../../actions/project";

import Select from "react-select";

const ProjectForm = ({ addProject }) => {
  const [formData, setFormData] = useState({
    titre: "",
    mainImage:
      "https://res.cloudinary.com/orange-odc/image/upload/v1577297939/Iogo_kq5xgp.jpg",
    images: [
      "https://res.cloudinary.com/orange-odc/image/upload/v1577297939/Iogo_kq5xgp.jpg"
    ],
    descp: "",
    datef: new Date(),
    region: "",
    adress: "",
    nom: "",
    image:
      "https://res.cloudinary.com/orange-odc/image/upload/v1566554496/users/default.jpg",
    email: "",
    prof: ""
  });

  let {
    titre,
    mainImage,
    images,
    descp,
    datef,
    region,
    adress,
    nom,
    image,
    email,
    prof
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    addProject({
      titre,
      mainImage,
      images,
      descp,
      datef,
      region,
      adress,
      nom,
      image,
      email,
      prof
    });
  };

  const uploadWidget = e => {
    e.preventDefault();
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "orange-odc",
          uploadPreset: "ml_default",
          folder: "projects"
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setFormData({ ...formData, mainImage: result.info.secure_url });
            document.getElementById("mainImageV").src = result.info.secure_url;
          }
        }
      )
      .open();
  };
  const uploadWidget2 = e => {
    e.preventDefault();
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "orange-odc",
          uploadPreset: "ml_default",
          folder: "projects"
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setFormData({
              ...formData,
              images: [...images, result.info.secure_url]
            });
            document.getElementById("imagesV").src = result.info.secure_url;
          }
        }
      )
      .open();
  };
  const uploadWidget3 = e => {
    e.preventDefault();
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "orange-odc",
          uploadPreset: "ml_default",
          folder: "projects"
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setFormData({ ...formData, image: result.info.secure_url });
            document.getElementById("imageV").src = result.info.secure_url;
            // console.log("Done! Here is the image info: ", result.info);
          }
        }
      )
      .open();
  };

  const options = [
    { value: "Tunis", label: "Tunis" },
    { value: "Ariana", label: "Ariana" }
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
                      name="titre"
                      value={titre}
                      placeholder="titre"
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
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <label>date achevement: </label> <br />
                    <DatePicker
                      className="form-control"
                      selected={datef}
                      onChange={d => setFormData({ ...formData, datef: d })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>region: </label>
                    <Select
                      className="form-control"
                      value={options.find(p => p.value === region)}
                      onChange={v =>
                        setFormData({ ...formData, region: v.value })
                      }
                      options={options}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="adress"
                      value={adress}
                      placeholder="adress"
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6">
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
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={email}
                          placeholder="email"
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          name="prof"
                          value={prof}
                          placeholder="prof"
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h3 class="heading-39291">Image</h3>
                    <img
                      id="imageV"
                      style={{ height: "auto", width: "250px" }}
                      src={image}
                    ></img>
                    <button
                      className="form-control"
                      onClick={e => uploadWidget3(e)}
                    >
                      Add image
                    </button>
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
                  id="mainImageV"
                  style={{ height: "auto", width: "250px" }}
                  src={mainImage}
                ></img>
                <button className="form-control" onClick={e => uploadWidget(e)}>
                  Add image
                </button>

                <h3 class="heading-39291">Image</h3>
                <img
                  id="imagesV"
                  style={{ height: "auto", width: "250px" }}
                  src={images}
                ></img>
                <button
                  className="form-control"
                  onClick={e => uploadWidget2(e)}
                >
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

ProjectForm.propTypes = {
  addProject: PropTypes.func.isRequired
};

export default connect(null, { addProject })(ProjectForm);
