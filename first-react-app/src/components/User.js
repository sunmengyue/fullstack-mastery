import React from 'react';

function User(props) {
  return (
    <div>
      <h1>User</h1>
      <h2>{props.match.params.user}</h2>
    </div>
  );
}

export default User;
