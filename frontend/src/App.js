import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import BusinessMember from "./components/BusinessMember";
import Header from "../src/components/Header";

function App() {
  const [businessMembers, setBusinessMembers] = useState([]);
  const [updatedMember, setUpdatedMember] = useState({
    name: "",
    email: ""
  });
  const [memberEdit, setMemberEdit] = useState("");
  let newMember = [
    // ...updatedMember,
    // [event.target.name]: event.target.value
  ];

  function handleChange(event) {
    // setTeamMembers(newMember);
    console.log(businessMembers);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.name.value, event.target.email.value);
    newMember.push(
      `Name: ${event.target.name.value},Email: ${event.target.email.value}`
    );
    setBusinessMembers(businessMembers.concat(newMember));
  }

  function handleEdit(event) {
    event.preventDefault();
    let edit = `edit: ${event.target.value}`;
    console.log(edit);
    setMemberEdit(edit);
  }

  console.log(businessMembers);
  // setBusinessMembers(newMember);
  return (
    <div className="form-group">
      <Header />
      <h1 className="title">Businesses/ Donors</h1>
      <Form
        businessMembers={businessMembers}
        setBusinessMembers={setBusinessMembers}
        updatedMember={updatedMember}
        setUpdateMember={setUpdatedMember}
        memberEdit={memberEdit}
        setMemberEdit={setMemberEdit}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleEdit={handleEdit}
      />
      <div className="form-group">
        {businessMembers.map(member => {
          return (
            <BusinessMember
              businessMembers={businessMembers}
              setBusinessMembers={setBusinessMembers}
              updatedMember={updatedMember}
              setUpdateMember={setUpdatedMember}
              memberEdit={memberEdit}
              setMemberEdit={setMemberEdit}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleEdit={handleEdit}
              // edit={setMemberEdit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
