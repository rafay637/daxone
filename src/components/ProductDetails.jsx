import React, { useState } from 'react'
import { Button } from './Button';
// import { Navbar } from './Navbar';
import { Products } from './Cards';
// import { Footer } from './Footer';

const ProductDetails = (props) => {
    const [count, setCount] = useState(0);

    let update_value = () => {
        setCount(count + 1);
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="cardheading">
                <h1><strong>Product Deatils Page</strong></h1>
                <p>Home / <span>Product Details</span></p>
            </div>
            <section class="section product-detail">{props.id}
                <div class="details container">
                    <div class="left image-container">
                        <div class="main">
                            <img src={props.img} id='zoom' alt="Details" />
                        </div>
                    </div>
                    <div class="right">
                        <h1><strong>Brown Easy Sport Chair By Daxone</strong></h1>
                        <div class="price">$210</div>
                        <form class="form">
                            <p className='Bordering' onClick={update_value}>{count}</p>
                            <Button btn="Add To Cart" />
                        </form>
                        <h3><strong>PRODUCT DETAILS</strong></h3>
                        <p>
                            Men's T-shirts are versatile wardrobe staples, offering comfort and style in a variety of colors, patterns,
                            and fabrics. Whether worn casually with jeans or dressed up under a blazer, these garments effortlessly blend
                            comfort with fashion.
                        </p>
                    </div>
                </div>
            </section>
            <Products />
            {/* <Footer /> */}
        </>
    );
};

export default ProductDetails;