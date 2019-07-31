import React from 'react'
import { Switch, Route } from 'react-router-dom';
import VolunteerCard from './VolunteerCard'

export default function AppRouter() {
  return <div>
    <Switch>
      <Route exact path='/' />
      <Route path ="/volunteers/:id" component={VolunteerCard}/>
    </Switch>
  </div>

}