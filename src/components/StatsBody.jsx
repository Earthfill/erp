import { useSelector } from "react-redux"
import FormSelect from "./FormSelect"

const StatsBody = ({ label, name, list }) => {
  const { leaveOptions, leaveTime } = useSelector((store) => store.leave);

  return (
    <div className="mt-5 grid md:grid-cols-2 gap-5">
      <div className="align-page md:grid md:grid-cols-3 md:gap-5">
        <div className="flex flex-col">
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
        <div>
          <span>Remaining Allowance</span>
          <div></div>
        </div>
        <div>
          <span>Remaining Allowance</span>
          <div></div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="align-page"></div>
        <div className="align-page"></div>
        <div className="align-page"></div>
        <div className="align-page"></div>
      </div>
    </div>
  )
}

export default StatsBody