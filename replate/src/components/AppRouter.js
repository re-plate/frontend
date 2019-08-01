import React from 'react'
import { Switch, Route} from 'react-router-dom';
import VolunteerCard from './VolunteerCard'
import VolunteerList from './VolunteerList'

export default function AppRouter({volunteerArray}) {
  return <div>
    <Switch>
      <Route path ="/volunteers/:id" render = {props => <VolunteerCard {...props} volunteerArray = {volunteerArray}/>}/>
      <Route path = "/volunteers" render = {props => <VolunteerList {...props} volunteerArray = {volunteerArray}/>}/>
    </Switch>
  </div>

}