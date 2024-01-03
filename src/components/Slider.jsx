import { Button } from "./Button";

const Slider = () => {
    return (
        <>
            <div className="main kamkro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="kam">
                                <img src="https://template.hasthemes.com/daxone/daxone/assets/images/slider/hm1-single-1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="kam1">
                                <h5>30% off</h5>
                                <h1><strong>Comfort Chair</strong></h1>
                                <p>Collect from Daxone and get 30% Discount</p>
                                <Button btn="SHOP NOW" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Slider };