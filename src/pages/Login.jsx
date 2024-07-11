import { Link } from "react-router-dom";
import { FormInput } from "../components";
import { useState } from "react";
import logo from '../images/login_bg.svg';
import brandName from '../images/access_brand_name_with_logo.svg';

const initialState = {
  name: '',
  password: '',
  token: ''
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
    <section className="h-screen bg-cover md:bg-contain bg-no-repeat md:bg-repeat grid place-items-center" style={{ backgroundImage: `url(${logo})` }} >
      <form onSubmit={onSubmit} className="card w-80 md:w-3/5 lg:w-1/2 2xl:w-1/3 p-4 md:p-7 bg-base-100 lg:bg-gray-100 shadow-lg flex flex-col rounded-lg">
        <div className="bg-base-100 md:p-16 p-5 rounded-lg grid gap-5 ">
          <img src={brandName} alt="access bank" className="mx-auto" />
          <h3 className="text-center text-2xl font-semibold">
            Performance Portal
          </h3>
          <p class="text-center font-normal text-gray-400 text-xs md:text-sm">Input your password to login</p>
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
              name='token'
              value={values.token}
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