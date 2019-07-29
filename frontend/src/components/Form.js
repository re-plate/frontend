import React, { useState, useEffect } from "react";

const Form = props => {
  return (
    <div>
      <button onClick={props.handleEdit}> edit </button>
      <label>edit</label>
      <input type="text" name="edit" />
      <div className="form-container">
        <form onSubmit={props.handleSubmit}>
          <h1>Donor Sign Up</h1>
          <label>Company Name</label>
          <input type="text" name="company name" required />
          <label>Company Contact Name</label>
          <input type="text" name="company name" required />
          <label>Phone</label>
          <input type="text" name="phone" required />
          <label>Email</label>
          <input type="text" name="email" required />
          <label>Password</label>
          <input type="text" name="role" required />
          <button> Sign Up </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
