import React from 'react';

interface IError {
  error: Error;
}

const Error: React.FC<IError> = ({ error }) => {
  return (
    <div>
      <div>Message, {error.message}</div>
      <div>Stack, {error.stack}</div>
    </div>
  );
};

export default Error;
