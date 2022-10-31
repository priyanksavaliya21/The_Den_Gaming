import Hero from "../Compoment/Hero";
import Message from "../Compoment/Message";
import Products from "../Compoment/Products";
import Sign_up from "../Compoment/Sign_Up";


function Landing() {   
    return (
        <>
            <div className="main-content">
                
                <Hero />               

                <Message />

                <Products />

                <Sign_up />

            </div>
            
        </>
    );
}

export default Landing;