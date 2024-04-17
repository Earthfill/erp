import { PiDot, PiDotFill } from "react-icons/pi";
import { useSelector } from "react-redux"

const LeaveTable = () => {
  const { intDate, endDate } = useSelector((store) => store.leave);
  const defaultTable = [
    {
      startDate: intDate.firstDate,
      endDate: endDate.firstDate,
      status: 'approved',
      color: 'green'
    },
    {
      startDate: intDate.secondDate,
      endDate: endDate.secondDate,
      status: 'pending',
      color: 'yellow'
    },
    {
      startDate: intDate.thirdDate,
      endDate: endDate.thirdDate,
      status: 'approved',
      color: 'green'
    },
    {
      startDate: intDate.fourthDate,
      endDate: endDate.fourthDate,
      status: 'declined',
      color: 'red'
    },
    {
      startDate: intDate.fifthDate,
      endDate: endDate.fifthDate,
      status: 'approved',
      color: 'green'
    }
  ];
  
  return (
    <div className="w-full px-5 pb-16">
      <table className="table table-zebra">
        <thead>
          <tr className="md:text-base">
            <th>Start Date</th>
            <th>End Date</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
        {defaultTable.map((item) => {
          const { startDate, endDate, status, color } = item;
          const iconStyle = {
            color: color
          };

          return (
            <tr className="bg-gray-50 md:text-base">
              <td>{startDate}/2023</td>
              <td>{endDate}/2023</td>
              <td className="capitalize flex gap-3 items-center md:justify-center">
                <span style={iconStyle} className="md:w-fit"><PiDotFill size={25}/></span>
                <span className="md:w-fit">{status}</span>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default LeaveTable