import React from 'react';
import Volunteer from './Volunteer.js';
import Business from './Business.js';
import { Route } from "react-router-dom";

export default function App() {
  return <main>
    <Route path ="/volunteer" component = {Volunteer}></Route>
    <Route exact path ="/donate" component = {Business}></Route>
  </main>
}