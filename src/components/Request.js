import React, { useState } from "react";

const Request = props => {
  const [request, setRequest] = useState({
    id: "1",
    title: "Available",
    donor: "Me",
    date: "7/31/2019",
    info: "test"
  });

  const saveRequest = () => {
    const { addToSavedList } = props;
    addToSavedList(request);
  };

  const { title, donor, date, info } = request;
  return (
    <div className="save">
      <div className="rcard">
        <h2>{title}</h2>
        <div className="rdonor">
          donor: <em>{donor}</em>
        </div>
        <div className="rdate">
          Date posted: <strong>{date}</strong>
        </div>
        <div className="rdate">
          Information: <p>{info}</p>
        </div>
      </div>
      <div className="sbutton" onClick={saveRequest}>
        Save
      </div>
    </div>
  );
};

export default Request;
