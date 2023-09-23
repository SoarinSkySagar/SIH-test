import React from 'react';

const Data = ({ userDataJSON }) => {
  // Parse the JSON data back into an object
  const userData = JSON.parse(userDataJSON);

  return (
    <div>
      <h2>User Data</h2>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default Data;
