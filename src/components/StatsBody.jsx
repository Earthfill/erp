import { useSelector } from "react-redux"
import FormSelect from "./FormSelect"
import FormDate from "./FormDate";
import StatsContainer from "./StatsContainer";

const StatsBody = () => {
  const { leaveOptions, leaveTime } = useSelector((store) => store.leave);

  return (
    <div className="grid md:flex md:flex-col md:gap-y-5 lg:grid lg:grid-cols-3 mt-5 lg:gap-x-5 2xl:grid-cols-4">
      <div className="flex flex-col align-page md:gap-5 md:grid md:grid-rows-2 md:lg:col-span-2 lg:flex lg:flex-row lg:col-span-2 lg:gap-10 2xl:col-span-3">
        <div className="flex flex-col 2xl:col-span-2 2xl:w-full">
          <span>Leave Allowance</span>
          <span className="text-primary text-3xl tracking-tight">30<span className="text-xl">hrs</span></span>
          <FormSelect 
            label='Leave month'
            list={leaveTime}
          />
          <FormSelect 
            name='leaveOption'
            label='Leave Options'
            list={leaveOptions}
          />
        </div>
        <div className="hidden md:flex md:gap-10 md:justify-center lg:justify-center">
          <div className="md:flex md:flex-col md:items-center md:gap-y-5 lg:justify-evenly lg:-mt-10">
            <span>Leave left</span>
            <div className="radial-progress text-primary border" style={{ "--value": "80", "--size": "15rem", "--thickness": "5px" }} role="progressbar">
                <span className="absolute top-24 left-16 text-4xl">10 days</span>
            </div>
          </div>
          <div className="md:flex md:flex-col md:items-center md:gap-y-5 lg:justify-evenly lg:-mt-10">
            <span>Leave used</span>
            <div className="radial-progress text-warning border" style={{ "--value": "45", "--size": "15rem", "--thickness": "5px" }} role="progressbar">
                <span className="absolute top-24 left-16 text-4xl">5 days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="align-page">
          <div>
            Start Date
            <FormDate />
          </div>
          <div>
            End Date
            <FormDate />
          </div>
          <div className="flex items-center justify-between mt-4">
            <input type="checkbox" className="toggle toggle-primary" />
            <button className="button-style bg-primary text-white">Submit</button>
          </div>
        </div>
        <div>
          <StatsContainer />
        </div>
      </div>
    </div>
  )
}

export default StatsBody