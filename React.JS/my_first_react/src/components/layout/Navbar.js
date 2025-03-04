import { NavLink as Link } from 'react-router';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 48px;
`;

const NavList = styled.div`
  height: 100%;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  &.active {
    color: #3b82f6;
  }
  &:hover {
    color: #1e40af; /* Hover effect */
  }
`;

const Navbar = () => {
  return (
    <header>
      <Nav>
        <NavList className="h-full border-b border-gray-200 flex justify-center gap-2 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavList>
      </Nav>
    </header>
  );
};

export default Navbar;
