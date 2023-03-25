// ** Styles
import "@styles/react/pages/page-authentication.scss";
import Activity from "@src/views/pages/Activity";
import Member from "@src/views/pages/Member";
import Footer from "@src/views/pages/Footer";
import About from "@src/views/pages/About";
import Head from "@src/views/pages/Head";
import Contact from "@src/views/pages/Contact";


const Home = () => {
    return (
        <div className="shrink">
            <Head/>
            <About/>
            <Activity/>
            <Member/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
