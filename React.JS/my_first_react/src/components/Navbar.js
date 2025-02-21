const Navbar = () => {
  return (
    <header>
      <nav className="h-12">
        <ul className="h-full border-b border-gray-200 flex justify-center gap-2 items-center">
          <li className="hover:text-blue-400">Home</li>
          <li className="hover:text-blue-400">Contact</li>
          <li className="hover:text-blue-400">About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
