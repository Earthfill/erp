import { useSelector } from "react-redux"
import FormSelect from "./FormSelect"
import StatsContainer from "./StatsContainer";
import { MdPeople } from "react-icons/md";

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
          <div className="md:flex md:flex-col md:items-center md:gap-y-5 lg:justify-between">
            <span>Leave left</span>
            <div className="radial-progress text-primary" style={{ "--value": "80", "--size": "15rem", "--thickness": "5px" }} role="progressbar">
                <div className="shadow-lg p-5 text-4xl text-gray-400 rounded-full">
                  <MdPeople />  
                </div>
                <span className="absolute top-12 -left-3">10 days</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span>Leave used</span>
            <div className="radial-progress text-warning" style={{ "--value": "80", "--size": "15rem", "--thickness": "5px" }} role="progressbar">
                <div className="shadow-lg p-5 text-4xl text-gray-400 rounded-full">
                  <MdPeople />
                </div>
                <span className="absolute top-12 -left-3">15 days</span>
            </div>
          </div>
        </div>
      </div>
      <StatsContainer />
    </div>
  )
}

export default StatsBody