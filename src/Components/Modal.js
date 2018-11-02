import React from 'react';
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types';

class Modal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let values = serializeForm(e.target, {hash: true})
    if (this.props.addEmployee) {
      this.props.addEmployee(values)
      this.props.onClose()
    }
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 700,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      color: '#5c5c5c'
    };

    return (
      <div className='backdrop' style={backdropStyle}>
        <div className='modal' style={modalStyle}>
          <div className= 'modal-header'>
            <h2>Add Team Member</h2>
            <hr />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className='each-row'>
              <div>
                <div><label>First Name<span className='req-star'>*</span></label></div>
                <div ><input type='text' name='firstName' required /></div>
              </div>
              <div>
                <div><label>Last Name<span className='req-star'>*</span></label></div>
                <div><input type='text' name='lastName' required /></div>
              </div>
            </div>
            <div className='each-row'>
              <div>
                <div><label>Email address<span className='req-star'>*</span></label></div>
                <div><input type='email' name='email' required/></div>
              </div>
              <div>
                <div className='right'><label>Role<span className='req-star'>*</span></label></div>
                <div className='select'>
                  <select name='role' required className="select__field">
                    <option value='' default>Select One</option>
                    <option value='Sr Manager'>Sr Manager</option>
                    <option value='Tech Lead'>Tech Lead</option>
                    <option value='Engineer'>Engineer</option>
                    <option value='Manager'>Manager</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='each-row'>
              <div>
                <div ><label>Phone<span className='req-star'>*</span></label></div>
                <div><input className='phone-number' type='number' name='phone' required /></div>
              </div>
              <div>
                <div className='right'><label>Department<span className='req-star'>*</span></label></div>
                <div className='select'>
                  <select name='department' required className="select__field">
                    <option value='' default>Select One</option>
                    <option value='Design'>Design</option>
                    <option value='Marketing'>Marketing</option>
                    <option value='Sales'>Sales</option>
                    <option value='Admin'>Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='submit-close'>
              <button className='cancel-button'onClick={ this.props.onClose }>Cancel</button>
              <button className='submit-button'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
