import Card from '../components/Card';
import React from 'react';

function Profile() {
  return (
    <div className="content p-40">
      <div className="align-center justify-between mb-40">
        <h1>I`m sorry &#128557; </h1>
        <br/>
        <p>I can`t create resource on MockAPI without premium account. Soo, this page dont work &#128531;</p>
        <br/>
        <p>Have nice day!</p>
      </div>

      <div className="d-flex flex-wrap">
        {[].map((item, index) => (
          <Card/>
        ))}
      </div>
    </div>
  );
}

export default Profile;