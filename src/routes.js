import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LazyComponent from './common/LazyComponent';
import Home from 'pages/home/Home'
const About = lazy(() => import("pages/about/About"));
const Contact = lazy(() => import("pages/contact/Contact"));


const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                </nav>
                <hr/>
                <Route path="/" exact render={ (routeprops) => <Home text='Welcome home' {...routeprops}/>} />
                <Route path="/about" component={LazyComponent(About)} />
                <Route path="/contact" component={LazyComponent(Contact)} />
            </div>
        </Router>
    );
}

export default AppRouter;