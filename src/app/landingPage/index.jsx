import LangdingPageBody from "./components/body";
import Header from "./components/header";

const LandingPage = () => {
  return (
    <div className=" w-[428px] md:w-[820px]  lg:w-[1920px] flex items-center flex-col">
      <Header />
      <LangdingPageBody />
    </div>
  );
};
export default LandingPage;
