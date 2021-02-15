import React from 'react';
import { Route, Switch } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import CartProductPage from "./CartProductPage/CartProduct";
import AboutPage from "./AboutPage/AboutPage";
import CertificatesPage from "./CertificaesPage/CertificaesPage";
import FeedbacksPage from "./FeedbacksPage/FeedbacksPage";
import ContactsPage from "./ContactsPage/ContactsPage";

const Pages = () => {
    return (
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route path="/catalog-production/cart-product">
                <CartProductPage/>
            </Route>
            <Route path="/about-us">
                <AboutPage/>
            </Route>
            <Route path="/certificates">
                <CertificatesPage/>
            </Route>
            <Route path="/feedbacks">
                <FeedbacksPage/>
            </Route>
            <Route path="/contacts">
                <ContactsPage/>
            </Route>
        </Switch>
    );
};

export default Pages;
