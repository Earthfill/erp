const StatItem = ({ count, title, icon, color, bcg }) => {
  const iconStyle = {
    backgroundColor: bcg,
    color: color
  };

  return (
    // <div className="align-page md:flex-1">
    //   <span className='rounded-full p-3 2xl:p-4 text-3xl md:hidden' style={iconStyle}>{icon}</span>
    //   <div className="flex flex-col items-center gap-3">
    //     <span className="text-5xl lg:text-6xl">{count}</span>
    //     <h5 className="capitalize text-gray-500">{title}</h5>
    //   </div>
    // </div>
    <div className="align-page flex justify-center gap-x-3 md:mx-2 items-center">
      <span className="rounded-full p-3 2xl:p-4 text-3xl" style={iconStyle}>{icon}</span>
      <div className="flex flex-col items-center gap-3">
        <span className="text-5xl lg:text-4xl 2xl:text-6xl">{count}</span>
        <h5 className="capitalize text-gray-500">{title}</h5>
      </div>
    </div>
  )
}

export default StatItem