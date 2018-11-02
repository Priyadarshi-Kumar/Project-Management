import React, { Component } from 'react'
import search from '../Images/search.png'
import ListEmployee from './ListEmployee'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Modal from './Modal';

//Component for center content table and project sidebar

class CenterBody extends Component {
  state = {
    currEmployees: '',
    checked: false,
    query: '',
    isOpen: false
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // sets table content after sorting
  nameHandle = () => {
    const currEmployees = this.props.employees.sort(sortBy('name'))
    this.setState({ currEmployees })
  }

  // sets table content after sorting the department
  depHandle = () => {
    const currEmployees = this.props.employees.sort(sortBy('department'))
    this.setState({ currEmployees })
  }

  // sorts table contents as per role and sets state
  roleHandle = () => {
    const currEmployees = this.props.employees.sort(sortBy('role'))
    this.setState({ currEmployees })
  }

  // toggles the content of table online and offline
  checkboxHandle = () => {
    if (this.state.checked !== true) {
      this.setState({ checked: true})
    }
    else {
      this.setState({checked: false})
    }
  }

  // handles the search input and changes the content of table
  searchHandle = (e) => {
    var searchValue = e.target.value
    this.setState({query: searchValue})
  }


  render() {
    let allEmployees = this.props.employees
    let showingEmployees = allEmployees

    // searches the employees
    const searchValue = this.state.query
    if (searchValue.length > 0) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      const searchedEmployee = (showingEmployees.filter((employee) => match.test(employee.name)))
      showingEmployees = searchedEmployee
    }
    let checked = this.state.checked

    // switches between online and offline employees
    if (checked) {
      showingEmployees = this.props.employees.filter((employee) => (employee.status === 1))
    }
    const totOnline = this.props.employees.filter((employee) => (employee.status === 1)).length

    return(
      <div className='center-body'>

          <div className='center-body-nav'>
            <div className='center-nav-left'>
              <div className='project-name-active'>
                <label className='project-name-center'>{this.props.currProject}</label>
                <div className='project-active-member'>{totOnline} active members</div>
              </div>
              <div className='search-bar'>
                <input type="text" maxLength='14' placeholder="Search by Name.." onChange={this.searchHandle} style={{backgroundImage: `url(${search})`}}/>
              </div>
            </div>

            <div className='center-body-nav-right'>
              <div className='online-now'> Online now</div>
              <div className='online-offline-switch'>
                <label className="switch">
                  <input type="checkbox" onChange={this.checkboxHandle} />
                    <span className="slider round"></span>
                </label>
              </div>
              <div >
                <input className='add-new-member' type='button' value='+ Add a new Member' onClick={this.toggleModal}/>
                  <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}
                    addEmployee={this.props.addEmployee}
                    currProject={this.props.currProject}>
                  </Modal>
              </div>
            </div>
        </div>

        <div className='employee-table'>
          <table>
            <thead>
              <tr>
                <th className='emp-nametd' onClick={this.nameHandle}>NAME <span className='traingle'>▾</span></th>
                <th className='emp-deptd' onClick={this.depHandle}>DEPARTMENT <span className='traingle'>▾</span></th>
                <th className='emp-emailtd'>EMAIL</th>
                <th className='emp-nametd'>PHONE</th>
                <th className='emp-roletd' onClick={this.roleHandle}>ROLE <span className='traingle'>▾</span></th>
                <th className='emp-moretd'></th>
              </tr>
            </thead>

            <tbody className={this.state.isOpen ? 'blur-body':'scrolling-tbody'} >
              {showingEmployees.map((employee, index) => (<ListEmployee key = {index} currEmployee={ employee }/>))}
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

export default CenterBody
