import { NavLink } from 'react-router';

const navList = [
  {
    name: 'Home',
    path: '/',
  },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/about' },
];

const Navbar = () => {
  return (
    <header>
      <nav className="h-12">
        <div className="h-full border-b border-gray-200 flex justify-center gap-2 items-center">
          {navList.map((item) => (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                'hover:text-blue-700' +
                (!isActive ? ' text-black' : ' text-blue-700')
              }
              key={item.name}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
