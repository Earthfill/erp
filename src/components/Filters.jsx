import { FaFilter } from "react-icons/fa"
import FormSelect from "./FormSelect"
import { useSelector } from "react-redux"

const Filters = () => {
  const { sortOptions } = useSelector((store) => store.leave);

  return (
    <div className="align-page flex flex-col md:flex-row md:items-center gap-3">
      <div className="flex gap-3 w-fit items-center border border-primary rounded-md p-3 text-primary">
        <FaFilter />
        Filters (1)
      </div>
      <div>
        <label className="input input-bordered flex items-center rounded-md gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          <input type="text" className="grow"/>
        </label>
      </div>
      <div className="-mt-4">
        <FormSelect
          list={sortOptions}
          size='select-md'
        />
      </div>
    </div>
  )
}

export default Filters