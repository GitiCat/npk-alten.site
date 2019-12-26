import React from "react";
import Top from "./top/top";
import About from "./about/about";
import Services from "./services/services";
import Products from "../../../containers/home/products";
import Licences from "./licences/licences"
import News from "../../../containers/home/news"
import Contacts from "./contacts/contacts"

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Top/>
        <About/>
        <Services/>
        <Products/>
        <Licences/>
        <News/>
        <Contacts/>
      </React.Fragment>
    );
  }
}

export default Home;