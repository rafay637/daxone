import { Button } from "./Button";

const Carosel = () => {
    return (
        <>
            <div className="carosel">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://template.hasthemes.com/daxone/daxone/assets/images/banner/banner-1.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="work">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea facere, animi eaque repudiandae officia, assumenda nulla maxime tenetur numquam cum reprehenderit fugiat vel sapiente libero dolorem. Consectetur dolor natus reiciendis.</p>
                            <h1><strong>Winter Discount</strong></h1>
                            <h1><strong>Up to 30%</strong></h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <Button btn="SHOP NOW" />
                        </div>
                    </div>
                </div>

                <div className="banner-texting">
                <div className="row">
                    <div>
                        <h3><strong>All Products</strong></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit fuga, eos explicabo.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            </div>

            
        </>
    );
};

export { Carosel };