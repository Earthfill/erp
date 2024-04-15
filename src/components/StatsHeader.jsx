import SectionTitle from "./SectionTitle"

const StatsHeader = () => {
  return (
    <div>
      {/* mobile */}
      <div className="align-element grid grid-cols-2 gap-y-6 md:hidden">
        <div className="tabs tabs-boxed col-span-2">
          <a role="tab" className="tab tab-active">Leave Requests</a>
          <a role="tab" className="tab bg-base-100">Sickness Leave</a>
        </div>
        <SectionTitle text='Leave Requests' />
        <button className="bg-primary text-base-100 button-style w-fit ml-10">Add Leave</button>
      </div>

      {/* desktop */}
      <div>
        <div className="hidden md:flex md:justify-between">
          <SectionTitle text='Leave Requests' />
          <div className="tabs tabs-boxed hidden md:block">
            <a role="tab" className="tab tab-active">Leave Requests</a>
            <a role="tab" className="tab bg-base-100">Sickness Leave</a>
          </div>
          <button>Add Leave</button>
        </div>
      </div>
    </div>
  )
}

export default StatsHeader