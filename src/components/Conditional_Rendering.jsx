import React from 'react'
import { ProductDetails } from './ProductDetails';
import { Cards } from './Cards';

const Conditional_Rendering = () => {

    // const [show_details, setShow_details] = useState(false);
    const [current_data, setCurrent_data] = useState(null);

    const show_details_handle = (data) => {
        setCurrent_data(data);
        // setShow_details(true);
    };

    const go_back_handle = () => {
        setCurrent_data(null);
    };

    return (
        <>
            <div className="container">
                {current_data ? (
                    <ProductDetails
                        go_back_handle={go_back_handle}
                        image_url={current_data.image_url}
                        heading={current_data.heading}
                        price={current_data.price}
                        description={current_data.description}
                    />
                ) : (
                    <div className="main">
                        <div className="row">
                            <div className="col-md-3">
                                <Cards
                                    click_handle={show_details_handle}
                                    image_url={"https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg"}
                                    title={"Chair"}
                                    text={"Golden Easy Sport Chair"}
                                    price={"$210.00"}
                                />
                            </div>
                            <div className="col-md-3">
                                <Cards
                                    click_handle={show_details_handle}
                                    image_url={"https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg"}
                                    title={"Chair"}
                                    text={"Golden Easy Sport Chair"}
                                    price={"$320.00"}
                                />
                            </div>
                            <div className="col-md-3">
                                <Cards
                                    click_handle={show_details_handle}
                                    image_url={"https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg"}
                                    title={"Chair"}
                                    text={"Golden Easy Sport Chair"}
                                    price={"$430.00"}
                                />
                            </div>
                            <div className="col-md-3">
                                <Cards
                                    click_handle={show_details_handle}
                                    image_url={"https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg"}
                                    title={"Chair"}
                                    text={"Golden Easy Sport Chair"}
                                    price={"$540.00"}
                                />
                            </div>
                        </div>
                    </div>)}
            </div>
        </>
    );
};

export { Conditional_Rendering };