import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("../../components/pages/home/index"));
const History = lazy(() => import("../../containers/history/history"));
const Activity = lazy(() => import("../../containers/activity/activity"));
const Documents = lazy(() => import("../../containers/documents/index"));
const Leadership = lazy(() => import("../../containers/leadership/index"));
const SelectedLeadership = lazy(() => import("../../containers/leadership/selected/index"));
const Licences = lazy(() => import("../../containers/licences/index"));
const Publications = lazy(() => import("../../containers/publications/index"));
const Products = lazy(() => import("../../containers/products/index"));
const SelectProductCategory = lazy(() => import("../../containers/products/select_product/index"));
const News = lazy(() => import("../../containers/news/index"));
const NewsSelected = lazy(() => import("../../containers/news/selected/index"));

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} title="Главная"/>
        <Route path="/history" component={History} title="История"/>
        <Route path="/activity" component={Activity} title="Деятельность"/>
        <Route path="/documents" component={Documents} title="Документы"/>
        <Route exact path="/company/leadership" component={Leadership} title="Руководство"/>
        <Route path="/company/leadership/:id" component={SelectedLeadership} title="Руководство"/>
        <Route path="/company/publications" component={Publications} title="Патенты"/>
        <Route path="/company/licences" component={Licences} title="Лицензии"/>
        <Route exact path="/products" component={Products} title="Продукция"/>
        <Route path="/products/:category/:id" component={SelectProductCategory} title="Продукция"/>
        <Route exact path="/news" component={News} title="Новости"/>
        <Route path="/news/:id" component={NewsSelected} title="Новости"/>
      </React.Fragment>
    );
  }
}

export default Routes;