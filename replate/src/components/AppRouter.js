import React from 'react'
import { Switch, Route} from 'react-router-dom';
import VolunteerCard from './VolunteerCard'
import VolunteerList from './VolunteerList'


export default function AppRouter({volunteerArray, setEdit, switchEditVolunteer}) {
  return (<div>
    <Switch>
      <Route path ="/volunteer/volunteers/:id" render = {props => <VolunteerCard {...props} volunteerArray = {volunteerArray} 
      setEdit = {setEdit} switchEditVolunteer = {switchEditVolunteer}/>}/>
      <Route path = "/volunteer/volunteers" render = {props => <VolunteerList {...props} volunteerArray = {volunteerArray}/>}/>
    </Switch>
  </div>)

}