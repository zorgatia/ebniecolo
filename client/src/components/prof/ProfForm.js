import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addProf } from "../../actions/prof";

import Select from 'react-select';


const ProfForm = ({ addProf }) => {

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    image: "https://res.cloudinary.com/orange-odc/image/upload/v1566554496/users/default.jpg",
    type: "",
    fix: "",
    mob: "",
    site: ""
  });

  let { nom, prenom, email, image, type, fix, mob, site } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  const onSubmit =  e => {
    e.preventDefault();
    
    addProf({ nom, prenom, email, image, type, fix, mob, site });
  };

  const uploadWidget = e => {
    e.preventDefault();
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "orange-odc",
          uploadPreset: "ml_default",
          folder: "profs"
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
  { value: 'Architectes', label: 'Architectes' },
  { value: 'Ingénieurs', label: 'Ingénieurs' },
  { value: 'Contrôleurs Techniques', label: 'Contrôleurs Techniques' },
  { value: 'Entreprises', label: 'Entreprises' },
  { value: 'Artisans', label: 'Artisans' },
  { value: 'Matériaux', label: 'Matériaux' },
  { value: 'Institutions', label: 'Institutions' }

];



  return (
    <Fragment>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      name="nom"
                      value={nom}
                      placeholder="nom"
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="prenom"
                      value={prenom}
                      placeholder="prenom"
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
                    
                    <Select
                    
                       value={options.find(p => p.value === type)}
                       onChange={v =>
                        setFormData({ ...formData, type: v.value })
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
                      name="fix"
                      value={fix}
                      placeholder="fix"
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="mob"
                      value={mob}
                      placeholder="mob"
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="site"
                      value={site}
                      placeholder="site"
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                <div class="col-md-6 mr-auto">

                  <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5 rounded-0" value="Send Message" />
                </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
              <h3 class="heading-39291">Image</h3>
              <img id="imageV" style={{height: "auto",width: "250px"}} src={image}></img>
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

ProfForm.propTypes = {
  addProf: PropTypes.func.isRequired
};

export default connect(null, { addProf })(ProfForm);
