import React from "react";
import Header from "./parts/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";

import SitePath from "./parts/SitePath/SitePath";
import Footer from "./parts/Footer/Footer";
import Pages from "./pages";

function App () {
    return (
        <div className="app">
            <Router>
                {/*  Header  */}
                <Header/>
                {/*  Site Path  */}
                <SitePath/>
                {/*  Site Pages  */}
                <Pages/>
                {/*  Footer  */}
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
