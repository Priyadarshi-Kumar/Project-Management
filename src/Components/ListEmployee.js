import React from 'react'
import more from '../Images/more.png'

// Component for listing all the employees inside table
function ListEmployee(props) {
  let name = props.currEmployee.name.split(' ')
  let initials = name[0].charAt(0).toUpperCase() + name[1].charAt(0).toUpperCase();
  return(
    <tr>
      {/* filters the project member and sets a green online status with initials */}
      <td className='emp-name'>
        <div className='emp-name-init'><div className='init-tag'>{ initials }</div><div className={ props.currEmployee.status ? 'emp-name-init green-dot' : 'emp-name-init no-green-dot'}></div></div>
        <div className='emp-name-lorem'>
          <div>{props.currEmployee.name}</div>
          <div className='lorem-ipsum'>Lorem Ipsum</div>
        </div>
      </td>
      <td className='emp-dep'>{props.currEmployee.department}</td>
      <td className='emp-email'>{props.currEmployee.email}</td>
      <td className='emp-phone'>{props.currEmployee.phone}</td>
      <td className='emp-role'>{props.currEmployee.role}</td>
      <td className='emp-more'><img src={more} alt='more option' /></td>
    </tr>
  )
}

export default ListEmployee
