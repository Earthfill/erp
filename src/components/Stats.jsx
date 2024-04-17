import StatsBody from "./StatsBody"
import StatsHeader from "./StatsHeader"

const Stats = () => {
  return (
    <div className="2xl:max-w-full md:mx-auto md:max-w-screen-2xl md:px-12 bg-gray-100 h-full align-element py-8">
      <StatsHeader />
      <StatsBody />
    </div>
  )
}

export default Stats