import React from 'react'

import './Header.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button
} from 'reactstrap'
import Auth from '../Auth'
import Modal from '../Modal'
import { Logout } from '../../services/auth'

import { isAuthenticated } from '../../utils/helper'

const Header = (props) => {
  const handleLogout = () => {
    Logout()
    window.location.reload()
  }

  return (
    <div className='nav-bar'>
      <Navbar color='dark' light expand='md'>
        <NavbarBrand href='/' className='text-white logo'>Calendly</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className='mr-auto' navbar />
          {!isAuthenticated()
            ? <>
              <Modal buttonLabel='SignUp' modalTitle='SignUp'><Auth type='signUp' {...props} /></Modal>
              <Modal buttonLabel='Login' modalTitle='Log In'><Auth type='signIn' /></Modal>
              </>
            : <Button type='primary' onClick={handleLogout}>Logout</Button>
          }
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
