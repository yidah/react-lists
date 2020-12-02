import React from 'react';

const validation = (props) => {
  let vmsg = 'Text long enough';
  if (props.inputLength <= 5) {
    vmsg = 'Text too short';
  }
  return (
    <div>
      <p>{vmsg}</p>
    </div>
  );
};

export default validation;
