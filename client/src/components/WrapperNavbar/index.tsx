import { Outlet } from 'react-router';
import Header from 'components/Header/Header';
import Footer from 'components/Footer';
const WrapperNavbar = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default WrapperNavbar;
