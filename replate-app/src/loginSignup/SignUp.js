import React  from 'react';
import { Link, NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

import {signUp} from '../store/actions/index';

class SignUp extends React.Component {
  constructor() {
      super();
          this.state= {
              name: '',  
              email: '',
              password: '',
              type: ''
      }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange (e) {
  let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let name = target.name;

  this.setState({
    ...this.state,
      [name]: value
    });
  }

  handleSubmit (e){
    e.preventDefault();
    this.props.signUp(this.state)
    this.props.history.push('/')
    console.log('Form was submitted')
    console.log(this.state)
  }

render() {
    return (
        <div>
           <label>SignUp</label> 
          <div className="initial-form">
            <form onSubmit ={e => this.handleSubmit(e, this.state)} className='form-fields'>
              <div className='form-field'>
                <label className='formField-label' htmlFor='name'>Name</label>
                <input 
                  className='form-field-input'  
                  type='text'
                  id='name'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange} 
                />    
              </div>

              <div className='form-field'>
                <label className='formField-label' htmlFor='username'>Username</label>
                <input 
                  className='form-field-input'  
                  type='text'
                  id='username'
                  name='username'
                  value={this.state.username}
                  onChange={this.handleChange} 
                />    
              </div>

              <div className='form-field'>
                <label className='formField-label' htmlFor='email'> Email</label>
                <input 
                  className='form-field-input'  
                  type='email'
                  id='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange} 
                />    
              </div>

              <div className='form-field'>
                <label className='formField-label' htmlFor='password'>Password</label>
                <input 
                  className='form-field-input'  
                  type='password'
                  id='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange} 
                />     
              </div>
              <div className='form-field'>
                <label className='formField-label' htmlFor='password'>Account Type</label>
                <input 
                  className='form-field-input'  
                  type='number'
                  id='type'
                  name='type'
                  value={this.state.type}
                  onChange={this.handleChange} 
                />     
              </div>
              <div className='form-field'>
                <button className='initial-button'>Sign Up</button> <Link to='/' className='formField-link'>I'm already a member</Link>   
              </div>
            </form>   
          </div>
        </div>
    );
  }
}

export default  connect(null, {signUp})(SignUp);

