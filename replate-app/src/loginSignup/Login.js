import React  from 'react';
import  {login} from '../store/actions/index';
import {connect} from 'react-redux';

import { Link, withRouter, NavLink } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange = (e) => {
    this.setState({
          ...this.state,
        [e.target.name]: e.target.value
    })
 }

  handleSubmit = (e) =>{
      e.preventDefault();
      this.props.login(this.state)

      //where is the user going to be sent after login in?
      // this.props.history.push('')
  }

  render() {
      return(
          <div>
             <div className='pageSwitch'>
                <label>Login</label>
             </div>
             <div className='inital-form'>
               <form onSubmit={this.handleSubmit} className='form-fields'>
                 <div className='form-field'>
                   <label className='formField-label' htmlFor='username'>Username</label>
                   <input
                     className='form-field-input'  
                     type='text'
                     id='username'
                     name='username'
                     value={this.state.username}
                     onChange={this.handleChange} />
                 </div>

                 <div className='form-field'>
                   <label className='formField-label' htmlFor='password'>Password</label>
                   <input
                     className='form-field-input'  
                     type='password'
                     id='password'
                     placeholder='Enter your password'
                     name='password'
                     value={this.state.password}
                     onChange={this.handleChange} />
                 </div>
                 <button className='initial-button'>Login</button> <Link to='/sign-up' className='formField-link'>Create an Account</Link>
               </form>    
             </div>
          </div>
         
      )
  }
}



export default connect(null, {login})(Login);