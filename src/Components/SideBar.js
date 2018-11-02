// this component creates the project list

import React, { Component } from 'react'

class SideBar extends Component {
  handleClick = (e) => {
    this.props.onChangeProject(e.currentTarget.id)
  }

  render() {
    const project = this.props.project
    let projectTitle = project.split(" ")
    let initials = projectTitle[0].charAt(0).toUpperCase() + projectTitle[1].charAt(0).toUpperCase();
    return(
        <div className='project-name' id={project} onClick={ this.handleClick }><div className='initials'>{initials}</div><li>{ project }</li></div>
    )
  }
}

export default SideBar
