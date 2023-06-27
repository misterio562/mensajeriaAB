import Navbar from "@/components/navbar";

const LoginLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
    </>
  );
};

export default LoginLayout;
