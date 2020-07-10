import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbars from "../layout/Navbars";
import NotFound from "../layout/NotFound";
import Home from "../layout/Home";
import Projects from "../project/Projects";
import ProjectForm from "../project/ProjectForm";
import Profs from "../prof/Profs";
import ProfForm from "../prof/ProfForm";
import ProfEdit from "../prof/ProfEdit";

import PrivateRoute from "./PrivateRoute";
import ProjectDetail from "../project/ProjectDetail";

import Produits from "../produit/Produits"
import ProduitDetail from "../produit/ProduitDetail"
import ProduitForm from "../produit/ProduitForm"


const Routes = () => {
  return (
    <Fragment>
      
        <Navbars />
        
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/projects" component={Projects} />
          <Route exact path="/project"  component={ProjectDetail} />
          <PrivateRoute exact path="/projectform" component={ProjectForm} />

          <Route exact path="/profs" component={Profs} />
          <PrivateRoute exact path="/profform" component={ProfForm} />
          <PrivateRoute exact path="/profedit" component={ProfEdit} />

          <Route exact path="/produits" component={Produits} />
          <Route exact path="/produit" component={ProduitDetail} />
          <Route exact path="/produitForm" component={ProduitForm}/>

          <Route component={NotFound} />
        </Switch>
      
    </Fragment>
  );
};

export default Routes;
