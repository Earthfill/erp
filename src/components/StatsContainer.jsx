import { FaCheck, FaRegQuestionCircle } from "react-icons/fa";
import StatItem from "./StatItem";
import { MdPending } from "react-icons/md";
import { PiX } from "react-icons/pi";
import { useSelector } from "react-redux";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.leave);
  const defaultStats = [
    {
      title: 'approved',
      count: stats.approved,
      icon: <FaCheck />,
      color: 'green',
      bcg: '#cdeed5'
    },
    {
      title: 'pending',
      count: stats.pending,
      icon: <MdPending size={50} />,
      color: '#ffae19',
      bcg: '#ffffb3'
    },
    {
      title: 'requests',
      count: stats.requests,
      icon: <FaRegQuestionCircle size={50} />,
      color: 'blue',
      bcg: '#ccccff'
    },
    {
      title: 'declined',
      count: stats.declined,
      icon: <PiX size={50} />,
      color: 'red',
      bcg: '#ffcccc'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="hidden md:grid md:grid-cols-2 md:gap-5">
        {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item} />
        })}
      </div>

      <div className="md:hidden w-64 mx-auto mt-5">
        <Slider {...settings}>
          {defaultStats.map((item, index) => (
            <div key={index}>
              <StatItem {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default StatsContainer