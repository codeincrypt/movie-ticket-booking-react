import Headers from "../page/components/Header";

const UserAuthLayout = ({ children }) => {
  return (
    <>
      <Headers />
      {children}
    </>
  );
};

export default UserAuthLayout;
