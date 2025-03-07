import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="2xl:max-w-[1400px] mx-auto p-3 w-full flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
