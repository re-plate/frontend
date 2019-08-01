import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import BusinessMember from "./components/BusinessMember";
import Header from "./components/Header";
// import RequestList from "./components/RequestList";
// import Request from "./components/Request";
import SavedList from "./components/SavedList";

// import axios from "axios";

// const Request = props => {
//   const [request, setRequest] = useState({});
//   useEffect(() => {
//     const id = props.match.params.requestId;
//     // change ^^^ that line and grab the id from the URL
//     // You will NEED to add a dependency array to this effect hook

//     axios
//       .get(`http://localhost:5000/api/request/${request.id}`)
//       .then(response => {
//         setRequest(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

function App() {
  const [businessMembers, setBusinessMembers] = useState([]);
  const [updatedMember, setUpdatedMember] = useState({
    name: "",
    email: ""
  });
  // const [showList, setShowList] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setShowList(!showList);
  // };
  const [memberEdit, setMemberEdit] = useState("");
  let newMember = [
    // ...updatedMember,
    // [event.target.name]: event.target.value
  ];

  const [savedList, setSavedList] = useState([]);

  const addToSavedList = request => {
    let matches = savedList.filter(req => req.id === request.id);
    return matches[0] ? null : setSavedList([...savedList, request]);
  };

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
    <div>
      <Header />

      <div className="form-group">
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
    </div>
  );
}

export default App;
