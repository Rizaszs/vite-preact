import { FunctionComponent } from "preact";
import Header from "../components/Common/Header";
import Home from "../components/Home/Home";
import Footer from "../components/Common/Footer";

const HomePage: FunctionComponent = () => (
  <div className="h-screen flex flex-col w-full justify-between bg-gray-300 p-10">
    <div className=" bg-slate-50 flex flex-col h-full justify-between rounded-2xl p-8">
      <Header />
      <Home />
      <Footer />
    </div>
  </div>
);

export default HomePage;
