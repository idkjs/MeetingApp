import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

import './SideNav.css'

class SideNav extends React.Component {
  constructor(){
    super()
    this.state = {
      isAllMeeting: '',
      isBookPage: '',
      isTimeLot: ''
    }
  }

  componentDidMount() {
    this.onRouteChanged();
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  };

  onRouteChanged = () => {
    if (this.props.location) {
      const { pathname } = this.props.location;
      this.setState({
        isAllMeeting: pathname === '/all-meetings' ? 'is-active' : '',
        isBookPage: pathname === '/book' ? 'is-active': '',
        isTimeLot: pathname === '/time-slots' ? 'is-active': '',
      })
    }
    
  }

  render() {
    const { isAllMeeting, isBookPage, isTimeLot } = this.state
    return (
      <div>
        <Nav vertical>
          <NavItem className={isAllMeeting}>
            <NavLink href='/all-meetings'>All meetings</NavLink>
          </NavItem>
          <NavItem className={isBookPage}>
            <NavLink href='/book'>Book a meeting</NavLink>
          </NavItem>
          <NavItem className={isTimeLot}>
            <NavLink href='time-slots'>Time Slots</NavLink>
          </NavItem>
        </Nav>
    </div>
    )
  }
}

export default SideNav
