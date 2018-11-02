import React, { Component } from 'react'
import MainBody from './MainBody'
import Navbar from './Navbar'

class DisplayProjects extends Component {
  render() {
    return(
      <div>
          <Navbar totNotification={this.props.manager.totNotification}
            dp={this.props.manager.pp}/>

          <MainBody allProjects={this.props.allProjects}
            manager={this.props.manager}
            switchP={this.props.switchProject}
            currProject={this.props.currProject}
            employees={this.props.employees}
            addEmployee={this.props.addEmployee}/>

          <div className='bottom-navbar'>
            <div className='copyright-text'>© 2013-2018 ABZCorp Company. All rights reserved.</div>
          </div>
      </div>
    )
  }
}

export default DisplayProjects
