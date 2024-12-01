// import React, { useState } from 'react';

import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    //reserFrom diya form ka reset kore thaki
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  return (
    <div>
      <h2>User signup</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            //ay jayga thaki amra formik thaki value gula ka bar kore nibo and jar jay value say gula ka set kore dibo.
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            //ay jayga thaki amra formik thaki value gula ka bar kore nibo and jar jay value say gula ka set kore dibo.
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            //ay jayga thaki amra formik thaki value gula ka bar kore nibo and jar jay value say gula ka set kore dibo.
            value={formik.values.password}
          />
        </div>
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;
