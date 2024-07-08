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
      <form onSubmit={onSubmit} className="card w-80 md:w-2/5 2xl:w-1/5 p-7 bg-gray-100 shadow-lg flex flex-col rounded-lg">
        <div className="bg-base-100 md:p-16 p-5 rounded-lg">
          <h3 className="text-center text-2xl font-semibold">
            Performance Portal
          </h3>
          <p class="text-center text-gray-400 text-sm">Input your password to login</p>
          <div className="py-4 grid gap-4">
            <FormInput
              type='text'
              name='name'
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
              name='entrustToken'
              value={values.entrustToken}
              handleChange={handleChange}
            />
            <Link to='/' className="mt-4">
              <button
                type="submit"
                className="button-style"
              >
                submit
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login