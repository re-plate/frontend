import React from "react";

function BusinessMember(props) {
  return (
    <div>
      <p>members{props.businessMembers}</p>
      <p>editMembers{props.memberEdit}</p>
    </div>
  );
}

export default BusinessMember;
