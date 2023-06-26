import { FunctionComponent } from "preact";
import Header from "../components/Common/Header";
import About from "../components/About/About";
import Footer from "../components/Common/Footer";

const AboutPage: FunctionComponent = () => (
  <div>
    <Header />
    <About />
    <Footer />
  </div>
);

export default AboutPage;
