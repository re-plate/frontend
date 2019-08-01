import React from "react";

const SavedList = props => {
  return (
    <div className="saved-list">
      <p>Accepted requests:</p>
      {props.list.map(request => (
        <span key={request.id} className="saved-request">
          {request.title}
        </span>
      ))}
    </div>
  );
};

export default SavedList;
