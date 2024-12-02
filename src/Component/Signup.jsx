import * as yup from 'yup';

import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, 'name must have atleast 2 characters')
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, 'password must have atleast 6 characters')
        .required(),
    }),
    //reserFrom diya form ka reset kore hoy
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  console.error(formik.errors);

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
