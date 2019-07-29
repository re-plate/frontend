import React, { useState, useEffect } from "react";

const Form = props => {
  return (
    <div>
      <button onClick={props.handleEdit}> edit </button>
      <label>edit</label>
      <input type="text" name="edit" />
      <div className="form-container">
        <form onSubmit={props.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" required />
          <label>Email</label>
          <input type="text" name="email" required />
          <label>Role</label>
          <input type="text" name="role" required />
          <button> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
