import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const VisitorsLayout = () => {
  return (
    <div className="container bg-[#f2f5fa]">
      <Header />
      <main className="flex-grow mt-16 pl-0 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default VisitorsLayout;
