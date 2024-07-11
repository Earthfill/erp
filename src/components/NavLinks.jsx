import { FaChartLine, FaFile, FaMixer } from 'react-icons/fa';
import { MdMenu, MdSchedule } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const links = [
  {
    id: uuidv4(),
    text: 'overview',
    icon: <MdMenu />,
  },
  {
    id: uuidv4(),
    text: 'kPI',
    icon: <MdSchedule />,
  },
  {
    id: uuidv4(),
    text: 'appraisal',
    icon: <FaChartLine />,
  },
  {
    id: uuidv4(),
    text: 'report',
    icon: <FaFile />,
  },
  {
    id: uuidv4(),
    text: 'settings',
    icon: <FaMixer />,
  },
];

const NavLinks = () => {
  return (
    <div>
        {links.map((link) => {
          const { id, text, icon } = link;
          return (
            <Link to={`/${text}`} key={id} className="flex items-center space-x-2 active:bg-blue-900 active:text-white my-4 px-5 py-2 rounded-md">
              <span>{icon}</span>
              <span className='capitalize'>{text}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default NavLinks;
