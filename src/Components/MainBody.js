import React from 'react'
import SideBar from './SideBar'
import CenterBody from './CenterBody'

// Component for showing active project, members, online offline switch, search
function MainBody(props) {
  return(
      <div className='main-body'>
        <div className='project-sidebar'>
          <div className='profile-owner'>
            <figure>
              <img className='main-dp' src={props.manager.pp} alt='Ted Mosby'/>
              <figcaption className='owner-name'>{props.manager.name}</figcaption>
              <figcaption className='owner-job'>{props.manager.job}</figcaption>
            </figure>
          </div>

          <div className='scrolling'>
            <ol>
              { props.allProjects.map((projectName) => (
                <SideBar
                  key={ projectName.toLowerCase() }
                  project={ projectName }
                  onChangeProject={props.switchP}/>))}
            </ol>
          </div>
        </div>

        <div className='center-body'>
          <CenterBody
          currProject={ props.currProject }
          addEmployee={props.addEmployee}
          employees={ props.employees.filter((employee) => (employee.projectId.toLowerCase() === props.currProject.toLowerCase())) }/>
        </div>
      </div>
  )

}

export default MainBody
