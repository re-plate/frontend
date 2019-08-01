import React, { useState, useEffect } from "react";
import "../App.css";

const Form = props => {
  return (
    <div>
      <div className="form-container">
        <form onSubmit={props.handleSubmit}>
          <legend>Donor Sign Up</legend>
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
          <div className="signup">
            <button className="signButton"> Sign Up </button>
          </div>
        </form>
      </div>

      <h1 className="title">To make edits: </h1>
      <div className="editContainer">
        <input type="text" name="edit" />
        <button className="editButton" onClick={props.handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Form;
