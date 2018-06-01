
import "../sass/main.scss";
import "bootstrap"
import * as React from "react";
import* as ReactDOM from 'react-dom';
import {PortfolioNavbar} from './components/PortfolioNav';




ReactDOM.render(
    <PortfolioNavbar name="TypeScript"/>,
    document.getElementById("header")
);