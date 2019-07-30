import React from "react";

const SavedList = props => {
    
  return (
      <div className="saved-list">
        <p>Accepted requests:</p>
        {props.list.map(request => (
        //   <NavLink to={`/request/${request.id}`} key={request.id} className='link'>
            <span key={request.id} className="saved-request">
              {request.title}
            </span>
        //   </NavLink>
        ))}
        {/* <Link to="/" className="home-button link">
          Home
        </Link> */}
      </div>
    );
}

export default SavedList;