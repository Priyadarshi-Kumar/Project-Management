import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import DisplayProjects from './Components/DisplayProjects'
import NotFound from './Components/NotFound'

import './App.css'
import './NotFound.css'
import dp from './Images/dp.png'

class App extends Component {

  /* State for Logged in Manager, employees list, active project*/
  state = {
    allProjects: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E', 'Project F', 'Project G',
      'Project H', 'Project I', 'Project J', 'Project K', 'Project L', 'Project M', 'Project N', 'Project O', 'Project P', 'Project Q', 'Project R', 'Project S'],

    manager:
      {
        totNotification: 8,
        pp: dp,
        name: 'Ted Mosby',
        job: 'Human Resource | Sr. Associate'
      },

    employees: [
      {
        projectId: 'Project A',
        name: 'Priyadarshi kumar',
        department: 'Engineer',
        email: 'Priyadarshi@gmail.com',
        phone: '7764944858',
        role: 'Developer',
        status: 1
      },
      {
        projectId: 'Project A',
        name: 'Channawar Manish',
        department: 'Engineer',
        email: 'Manish@gmail.com',
        phone: '7764944858',
        role: 'Developer',
        status: 0
      },
      {
        projectId: 'Project a',
        name: 'Rohit sharma',
        department: 'Marketing',
        email: 'Rohit@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 1
      },
      {
        projectId: 'Project b',
        name: 'Pooja M',
        department: 'Machine Learning',
        email: 'pooja@gmail.com',
        phone: '7764944858',
        role: 'Data analyst',
        status: 1
      },
      {
        projectId: 'Project d',
        name: 'Dushyant Rana',
        department: 'Marketing',
        email: 'dushyant@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project f',
        name: 'Manisha Sangam',
        department: 'Writer',
        email: 'Manisha@gmail.com',
        phone: '7764944858',
        role: 'Content Writing',
        status: 0
      },
      {
        projectId: 'Project f',
        name: 'Praneetha Bhat',
        department: 'Management',
        email: 'praneetha@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 1
      },
      {
        projectId: 'Project f',
        name: 'Sawant Vrushali',
        department: 'Marketing',
        email: 'Rushali@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project e',
        name: 'Priya Sharma',
        department: 'Sales',
        email: 'priya@gmail.com',
        phone: '7764944858',
        role: 'Sales Manager',
        status: 1
      },
      {
        projectId: 'Project c',
        name: 'Revan Patil',
        department: 'Marketing',
        email: 'c@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 1
      },
      {
        projectId: 'Project c',
        name: 'Anup Narayan',
        department: 'Marketing',
        email: 'd@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project d',
        name: 'Dean Jones',
        department: 'Design',
        email: 'd@gmail.com',
        phone: '7764944858',
        role: 'Sr Manager',
        status: 1
      },
      {
        projectId: 'Project b',
        name: 'Vishwas Gurung',
        department: 'Admin',
        email: 'e@gmail.com',
        phone: '7764944858',
        role: 'Admin',
        status: 1
      },
      {
        projectId: 'Project b',
        name: 'Sihag Manisha',
        department: 'Marketing',
        email: 'sihag@gmail.com',
        phone: '7764944858',
        role: 'Tech Lead',
        status: 1
      },
      {
        projectId: 'Project b',
        name: 'Bachan Aishwarya',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: 'Sr Manager',
        status: 1
      },
      {
        projectId: 'Project f',
        name: 'Emily Clarke',
        department: 'Design',
        email: 'd@gmail.com',
        phone: '7764944858',
        role: 'Test Lead',
        status: 0
      },
      {
        projectId: 'Project f',
        name: 'Gary Kirsten',
        department: 'Marketing',
        email: 'd@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project A',
        name: 'Rajesh Kumar',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: ' Jr Manager',
        status: 1
      },
      {
        projectId: 'Project A',
        name: 'Shetty Rajat',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: ' sr Manager',
        status: 1
      },
      {
        projectId: 'Project c',
        name: 'Sweety Patel',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: 'manager',
        status: 1
      },
      {
        projectId: 'Project g',
        name: 'Prachi Sharma',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 1
      },
      {
        projectId: 'Project A',
        name: 'Priyadarshi kumar',
        department: 'Engineer',
        email: 'Priyadarshi@gmail.com',
        phone: '7764944858',
        role: 'Developer',
        status: 0
      },
      {
        projectId: 'Project A',
        name: 'Manish C',
        department: 'Engineer',
        email: 'Manish@gmail.com',
        phone: '7764944858',
        role: 'Developer',
        status: 1
      },
      {
        projectId: 'Project a',
        name: 'Rohit sharma',
        department: 'Marketing',
        email: 'Rohit@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project b',
        name: 'Pooja M',
        department: 'Officer',
        email: 'pooja@gmail.com',
        phone: '7764944858',
        role: 'Lieutinent',
        status: 1
      },
      {
        projectId: 'Project d',
        name: 'Rana Dushyant',
        department: 'Marketing',
        email: 'dushyant@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project f',
        name: 'Sangam Manisha',
        department: 'Management',
        email: 'Manisha@gmail.com',
        phone: '7764944858',
        role: 'sr. manager',
        status: 0
      },
      {
        projectId: 'Project f',
        name: 'Bhat Praneetha',
        department: 'Marketing',
        email: 'praneetha@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project f',
        name: 'Vrushali Savant',
        department: 'Marketing',
        email: 'rushali@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 1
      },
      {
        projectId: 'Project e',
        name: 'Priya K',
        department: 'Marketing',
        email: 'priya@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 1
      },
      {
        projectId: 'Project c',
        name: 'Raavan Patil',
        department: 'Marketing',
        email: 'c@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project c',
        name: 'Patel Anup',
        department: 'Marketing',
        email: 'd@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project b',
        name: 'Vishwas Kumar',
        department: 'Marketing',
        email: 'e@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      },
      {
        projectId: 'Project b',
        name: 'Sihag Manish',
        department: 'Marketing',
        email: 'sihag@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 1
      },
      {
        projectId: 'Project b',
        name: 'Aishwarya Rai',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: 'Sr Manager',
        status: 0
      },
      {
        projectId: 'Project A',
        name: 'Rajesh Patel',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: ' Jr Manager',
        status: 0
      },
      {
        projectId: 'Project A',
        name: 'Rajat Shetty',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: ' Sr Manager',
        status: 1
      },
      {
        projectId: 'Project c',
        name: 'Darsi Georgian',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: 'manager',
        status: 1
      },
      {
        projectId: 'Project g',
        name: 'Prachi Sharma',
        department: 'Marketing',
        email: 'georgian@gmail.com',
        phone: '7764944858',
        role: 'Manager',
        status: 0
      }

    ],
    currProject: 'Project A',
    currEmployees: []
  }

  //set current active project
  switchProject = (projectid) => {
    this.setState({ currProject: projectid })
  }

  //Adds a new project member into current active project
  addEmployee = (values) => {
    let fName = values.firstName
    let lName = values.lastName
    values['projectId'] = this.state.currProject
    values['status'] = (Math.random()>0.5)? 1 : 0;    //Randomly set online/offline status of a project member
    values['name'] = fName + ' ' + lName    //concats first name and last name of form modal
    this.setState( state => ({
      employees: state.employees.concat([ values ])
    }))
  }

  render() {
    return (
      <div className="App">
        <Switch>

          {/* DisplayProjects component renders Top and bottom navbar, project list, and center body content*/}
          <Route exact path='/' render={() => (
              <DisplayProjects
                manager={this.state.manager}
                allProjects={this.state.allProjects }
                switchProject={this.switchProject}
                currProject={this.state.currProject}
                employees={this.state.employees}
                addEmployee={this.addEmployee}/>)}/>

              {/* Routes to not found when entered URL is incorrect*/}
            <Route component={ NotFound }/>
      </Switch>
      </div>
    );
  }
}

export default App;
