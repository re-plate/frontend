import React, { useState } from 'react';

const DummyRequest = (props) => {
    const [request, setRequest] = useState(
        {id: "1",title:"Help!",author: "Me",date:"7/30/2019",info:"this is a test"},
    );
    

  const saveRequest = () => {
    const {addToSavedList} = props;
    addToSavedList(request)
  }

  const { title, author, date, info } = request;
  return (
    <div className="save-wrapper">
      <div className="request-card">
        <h2>{title}</h2>
        <div className="request-author">
          Author: <em>{author}</em>
        </div>
        <div className="request-date">
          Date posted: <strong>{date}</strong>
        </div>
        <div className="request-date">
          Information: <p>{info}</p>
        </div>
      </div>
      <div className="save-button" onClick={saveRequest}>
        Save
      </div>
    </div>
  );
}

export default DummyRequest;