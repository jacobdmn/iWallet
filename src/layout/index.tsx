import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div id='MAIN_LAYOUT' className='max-w-[350px] mx-auto relative'>
      <main className='min-h-[400px]'>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
