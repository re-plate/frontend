import React, { useState, useEffect } from 'react';

const VolunteerForm= ({
    volunteers,
    addToVolunteers,
    idCount,
    setIdCount,
    volunteerToEdit,
    isEditing,
    editFalse,
    }) => {

        const [volunteer, setVolunteer] = useState({ name: "", email: "", requests: "", imgUrl: ""});
        
        const inputHandler = event => {
            setVolunteer({...volunteer,[event.target.name]: event.target.value});
        };

        const submitHandler = event => {
            event.preventDefault();
            addToVolunteers(volunteer);
            setIdCount(idCount + 1);
            setVolunteer({ name: "", email: "", requests: "", imgUrl: ""})
        }

        const editHandler = event => {
            event.preventDefault();
            let copy = volunteers;
            let i = volunteer.id -1;
            copy.splice(i,1,volunteer);
            addToVolunteers(copy);
            setVolunteer({ name: "", email: "", requests: "", imgUrl: ""});
            editFalse();
        };

        useEffect(() => {
            if (isEditing) {
              const volunteer2Edit = volunteers.filter(
                volunteer => volunteer.id === volunteerToEdit
              )[0];
              setVolunteer(volunteer2Edit);
            }
          }, [isEditing, volunteers, volunteerToEdit]);

          return (
            <form onSubmit={isEditing ? editHandler : submitHandler}>
              <fieldset>
                <legend>Add Volunteer</legend>
                <div className="form-group row">
                  <label for="name" className="col-sm-2 col-form-label">
                    Name
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                        value={volunteer.name}
                        onChange={inputHandler}
                      />
                    </div>
                  </label>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={volunteer.email}
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleImgUrl1.com">Image</label>
                  <input
                    type="imageUrl"
                    className="form-control"
                    name="imgUrl"
                    placeholder="Link to an image of yourself"
                    onChange={inputHandler}
                    value={volunteer.imgUrl}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </fieldset>
            </form>
          );
    }

    export default VolunteerForm;

