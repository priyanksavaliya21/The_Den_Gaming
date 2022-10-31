import {Routes, Route } from 'react-router-dom';
import Header from "./Compoment/Header";
import Footer from "./Compoment/Footer";
import Landing from "./Pages/Landing";
import Product_Page from './Pages/Product_page';
import Team_Page from './Pages/Team_page';
import Contect from './Pages/Contect_page';
import Thanks from './Pages/Thanks';
import PageNotFound from './Pages/PageNotFound';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';

function App(){

  const  Newsletter = {
        head : "Thanks for Subscribing!",
        text : "You’re now subscribed to our newsletter! You’ll hear from us shortly",
    }
    const FormSubmit  = {
        head : "Thanks for Filling out our Form!",
        text : "Your form is submitted successfully! You’ll hear from us shortly.",
    }  

    return(
        <>   
            <div className="main_wrap">        
                <Header />
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    {/* <Route exact path="/home" element={<Landing/>} /> */}
                    <Route exact path="/product" element={<Product_Page/>} />
                    <Route exact path="/team" element={<Team_Page/>} />
                    <Route exact path="/Contect" element={<Contect/>} />
                    <Route exact path="/thanks" element={<Thanks data={Newsletter} />} />
                    <Route exact path="/thanksform" element={<Thanks data={FormSubmit} />} />
                    {/* <Route path="*" element={<PageNotFound/>} /> */}
                </Routes>
                <Footer />
            </div>
        </>
    );
}


export default App;