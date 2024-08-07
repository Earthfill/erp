const FormInput = ({ name, type, value, handleChange, size, labelText }) => {
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text text-sm md:text-base capitalize font-semibold">
            {labelText || name} <span className="text-error">*</span>
          </span>
        </div>
        <input 
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className={`input input-bordered input-sm md:input-md rounded-md ${size}`}
        />
      </label>
    </div>
  )
}

export default FormInput