// react libraries
import * as React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticated } from '../utils/helper'

const handleRender = Component => (props) => {
  if (!isAuthenticated()) {
    return <Redirect to='/' />
  }

  return <Component {...props} />
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => ((
  <Route {...rest} render={handleRender(Component)} />
))

export default AuthenticatedRoute
