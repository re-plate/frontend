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
          <button> Sign Up </button>
        </form>
      </div>

      <div className="editContainer">
        <button className="editButton" onClick={props.handleEdit}>
          Edit
        </button>
        <label>To make edits: </label>
        <input type="text" name="edit" />
      </div>
    </div>
  );
};

export default Form;
