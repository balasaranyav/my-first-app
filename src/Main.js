import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Storage from "./Storage";
import Parking from "./Parking";
import Contact from "./Contact";
import Todo from "./Todo";
import logo from "./logo.png";
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>React - Learnings</h1>
            <Link to="/">
              <img src={logo} alt="Logo"></img>
            </Link>
            <ul className="header">
              <li><NavLink exact to="/">Storage</NavLink></li>
              <li><NavLink to="/parking">Parking</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/todo">Todo</NavLink></li>

            </ul>
            <div className="content">
              <Route exact path="/" component={Storage}/>
              <Route path="/parking" component={Parking}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/todo" component={Todo}/>

            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;