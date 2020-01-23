import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import MeetingsPage from './pages/Meetings'
import BookingPage from './pages/Booking'
import TimeSlotPage from './pages/TimeSlots'

import AuthenticatedRoute from './components/authRoute'

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <AuthenticatedRoute path='/all-meetings' component={MeetingsPage} />
      <AuthenticatedRoute path='/book' component={BookingPage} />
      <AuthenticatedRoute path='/time-slots' component={TimeSlotPage} />
    </Switch>
  </Router>
)

export default Routes
