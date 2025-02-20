const Navbar = () => {
  return (
    <header>
      <nav class="h-12">
        <ul class="h-full border-b border-gray-200 flex justify-center gap-2 items-center">
          <li class="hover:text-blue-400">Home</li>
          <li class="hover:text-blue-400">Contact</li>
          <li class="hover:text-blue-400">About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
