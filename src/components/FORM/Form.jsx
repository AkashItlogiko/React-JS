import React, { useState } from 'react';
import style from './form.module.css';

export default function Form() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = user;

  const handeleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log('form is submitted');

    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handeleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handeleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handeleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
