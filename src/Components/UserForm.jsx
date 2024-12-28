import React, { useRef } from 'react';

const UserForm = () => {
  const userNameRef = useRef();
  const userPassRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const userName = userNameRef.current.value;
   const userPass = userPassRef.current.value;
    console.log({ userName, userPass });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName"> UserName : </label>

        <input type="text" id="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password"> Password : </label>

        <input type="password" id="password" ref={userPassRef} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default UserForm;
