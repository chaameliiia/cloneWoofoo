import "assets/css/_common.scss";
// import * as colors from 'components/common/Colors';
import React, { useState } from "react";
import Header from "components/common/Header";
import Aside from "components/common/Aside";
import Footer from "components/common/Footer";
import IndexWrapper from "./components/index/IndexWrapper";
import ServicesWrapper from "./components/services/ServicesWrapper";
import IncruitWrapper from "./components/incruit/IncruitWrapper";
import { Route, Switch } from "react-router-dom";
import Colors from "./contexts/ColorContext";

const App = () => {
  return (
    <Colors>
      <Header />
      <Switch>
        <Route path="/clonewoofoo" component={IndexWrapper} />
        <Route path="/index" component={IndexWrapper} />
        <Route path="/subServices" component={ServicesWrapper} />
        <Route path="/subIncruit" component={IncruitWrapper} />
      </Switch>
      <Aside />
      <Footer />
    </Colors>
  );
};

export default App;
