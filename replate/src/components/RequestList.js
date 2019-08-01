import React, { useState } from "react";
import { Link } from "react-router-dom";

const RequestList = ({ showList }) => {
  const [requests, setRequests] = useState([
    {
      id: "1",
      title: "Available",
      donor: "Me",
      date: "7/31/2019",
      info: "test"
    },
    {
      id: "2",
      title: "Leftovers",
      donor: "Me",
      date: "7/10/2019",
      info: "second test"
    }
  ]);

  if (showList) {
    return (
      <div className="request-list">
        {requests.map(request => (
          <RequestDetails key={request.id} request={request} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

function RequestDetails({ request }) {
  const { title, donor, date, info } = request;

  return (
    <div className="rcard">
      <Link to={`/requests/${request.id}`}>
        <h2>{title}</h2>
      </Link>
      <div className="rdonor">
        Donor: <em>{donor}</em>
      </div>
      <div className="rdate">
        Date: <strong>{date}</strong>
      </div>
    </div>
  );
}

export default RequestList;
