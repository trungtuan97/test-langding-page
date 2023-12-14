import Nav from "./Nav";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div className=" flex flex-col items-center font-Sansita w-full ">
      <TopHeader />
      <Nav />
    </div>
  );
};
export default Header;
