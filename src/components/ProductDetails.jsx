import React, { useState } from 'react'
import { Button } from './Button';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const ProductDetails = (props) => {
    const [count, setCount] = useState(0);

    let update_value = () => {
        setCount(count + 1);
    }

    return (
        <>
            <Navbar />
            <div className="cardheading">
                <h1><strong>Product Deatils Page</strong></h1>
                <p>Home / <span>Product Details</span></p>
            </div>
            <section class="section product-detail">
                <div class="details container">
                    <div class="left image-container">
                        <div class="main">
                            <img src={props.image_url} id='zoom' alt="Details" />
                        </div>
                    </div>
                    <div class="right">
                        <h1><strong>{props.heading}</strong></h1>
                        <div class="price">{props.price}</div>
                        <form class="form">
                            <p className='Bordering' onClick={update_value}>{count}</p>
                            <Button btn="Add To Cart" />
                        </form>
                        <h3><strong>PRODUCT DETAILS</strong></h3>
                        <p>{props.description}</p>
                    </div>
                </div>
            </section>
            <div className="handle">
                <div className="row">
                    <div className="handle-btn">
                        <button className='botn' onClick={props.go_back_handle}>See All</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export { ProductDetails };