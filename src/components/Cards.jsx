import { useState } from "react";
import ProductDetails from "./ProductDetails";

const Cards = () => {

    const [showData, setShowData] = useState(false);
    let showDataHandle = () => {
        setShowData(!showData);
    }

    return (
        <>
            {showData ? (<ProductDetails img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg"/>) :
                (<div className="nakro">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='cards' onClick={showDataHandle}>
                                <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg" alt="" />
                                <p className="title">Chair</p>
                                <p className="text">Golden easy sport chair</p>
                                <p className="price"><strong>$210.00</strong></p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='cards' onClick={showDataHandle}>
                                <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg" alt="" />
                                <p className="title">Table</p>
                                <p className="text">Brown easy sport table</p>
                                <p className="price"><strong>$320.00</strong></p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='cards' onClick={showDataHandle}>
                                <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg" alt="" />
                                <p className="title">Chair</p>
                                <p className="text">Dark brown sport chair</p>
                                <p className="price"><strong>$430.00</strong></p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='cards' onClick={showDataHandle}>
                                <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg" alt="" />
                                <p className="title">Table</p>
                                <p className="text">Golden easy sport table</p>
                                <p className="price"><strong>$540.00</strong></p>
                            </div>
                        </div>
                    </div>
                </div>)}
        </>
    );
};

const Products = () => {

    const [showDetails, setShowDetails] = useState(false);
    let showDetailsHandle = () => {
        setShowDetails(!showDetails);
    }

    return (
        <>
            { showDetails ? (<ProductDetails img="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg"/>) :
                (<div className="nakro">
                <div className="row">
                    <div className="col-md-3">
                        <div className='cards' onClick={showDetailsHandle}>
                            <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-5.jpg" alt="" />
                            <p className="title">Chair</p>
                            <p className="text">Black easy sport chair</p>
                            <p className="price"><strong>$210.00</strong></p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='cards' onClick={showDetailsHandle}>
                            <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg" alt="" />
                            <p className="title">Chair</p>
                            <p className="text">Brown easy sport chair</p>
                            <p className="price"><strong>$320.00</strong></p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='cards' onClick={showDetailsHandle}>
                            <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-7.jpg" alt="" />
                            <p className="title">Sofa</p>
                            <p className="text">Grey easy soft sofa</p>
                            <p className="price"><strong>$430.00</strong></p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='cards' onClick={showDetailsHandle}>
                            <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-8.jpg" alt="" />
                            <p className="title">Chair</p>
                            <p className="text">Black hard sport chair</p>
                            <p className="price"><strong>$540.00</strong></p>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export { Cards, Products };