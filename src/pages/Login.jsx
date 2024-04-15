import { Link } from "react-router-dom";
import { FormInput } from "../components";
import { useState } from "react";

const initialState = {
  name: '',
  password: '',
  entrustToken: ''
};

const Login = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="h-screen grid place-items-center">
      <form onSubmit={onSubmit} className="card w-80 md:w-2/5 2xl:w-1/5 md:p-16 p-5 bg-base-100 shadow-lg flex flex-col border border-t-primary border-t-4">
        <h3 className="text-center text-2xl font-semibold">
          Login
        </h3>
        <FormInput
            type='text'
            name='username'
            value={values.name}
            handleChange={handleChange}
          />
        <FormInput
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <FormInput
          type='password'
          name='entrust token'
          value={values.entrustToken}
          handleChange={handleChange}
        />
        <Link to='/' className="mt-4">
          <button
            type="submit"
            className="bg-primary text-base-100 w-full py-3 capitalize rounded-md mb-3"
          >
            submit
          </button>
        </Link>
      </form>
    </section>
  )
}

export default Login