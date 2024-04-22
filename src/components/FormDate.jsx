import { useState } from "react";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';

const FormDate = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="">
      <DatePicker 
        value={date} 
        onChange={(date) => setDate(date)} 
        className="w-full p-2 rounded-lg focus:outline-none focus:border-blue-500" 
        format="dd-MM-y"
        clearIcon={null}
        // calendarIcon={null}
        calendarClassName="bg-white"
      />
    </div>
  )
}

export default FormDate