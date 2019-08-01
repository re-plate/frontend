import React, { useState } from 'react';
import { Link } from "react-router-dom";

const DummyRequestList = ({showList}) => {
  const [requests, setRequests] = useState([
    {id: "1",title:"Help!",author: "Me",date:"7/30/2019",info:"this is a test"},
    {id: "2", title:"Help 2!",author: "Me",date:"7/30/2019",info:"this is a second test"},
  ]);

  //Fake API call
  // useEffect(() => {
  //   const getRequests = () => {
  //     axios
  //       .get('API_goes_here')
  //       .then(response => {
  //         setRequests(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  //   }
    
  //   getRequests();
  // }, []);


  if(showList) {
    return (
        <div className="request-list">
          {requests.map(request => (
            <RequestDetails key={request.id} request={request} />
          ))}
        </div>
      );
  }
  else {
      return null;
  }


}

function RequestDetails({ request }) {
  const { title, author, date, info } = request;

  return (
      <div className="request-card">
        {/* <Link to={`/requests/${request.id}`}> */}
          <h2>{title}</h2>
          {/* </Link> */}
        <div className="request-author">
          Author: <em>{author}</em>
        </div>
        <div className="request-date">
          Date posted: <strong>{date}</strong>
        </div>
      </div>
  );
}

export default DummyRequestList;