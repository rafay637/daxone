import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards';
import { Carosel } from './components/Carosel';
import { Footer } from './components/Footer';
import { ProductDetails } from './components/ProductDetails';
import { useState } from 'react';

let product_arr = [
  {
    id: 1,
    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg",
    title: "Table",
    text: "Brown Easy Sport Table",
    price: "$210.00",
    heading: "Brown Easy Sport Chair By Daxone",
    description: "The Brown Easy Sport Chair by Daxone combines comfort and style, featuring a sleek design and durable construction. With its rich brown color and ergonomic design, this sport chair provides a versatile seating solution for various outdoor activities.",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg",
    title: "Table",
    text: "Brown Easy Sport Table",
    price: "$320.00",
    heading: "Brown Easy Sport Chair By Daxone",
    description: "The Brown Easy Sport Chair by Daxone combines comfort and style, featuring a sleek design and durable construction. With its rich brown color and ergonomic design, this sport chair provides a versatile seating solution for various outdoor activities.",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg",
    title: "Table",
    text: "Brown Easy Sport Table",
    price: "$430.00",
    heading: "Brown Easy Sport Chair By Daxone",
    description: "The Brown Easy Sport Chair by Daxone combines comfort and style, featuring a sleek design and durable construction. With its rich brown color and ergonomic design, this sport chair provides a versatile seating solution for various outdoor activities.",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg",
    title: "Table",
    text: "Brown Easy Sport Table",
    price: "$540.00",
    heading: "Brown Easy Sport Chair By Daxone",
    description: "The Brown Easy Sport Chair by Daxone combines comfort and style, featuring a sleek design and durable construction. With its rich brown color and ergonomic design, this sport chair provides a versatile seating solution for various outdoor activities.",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 5,
    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-5.jpg",
    title: "Table",
    text: "Brown Easy Sport Table",
    price: "$650.00",
    heading: "Brown Easy Sport Chair By Daxone",
    description: "The Brown Easy Sport Chair by Daxone combines comfort and style, featuring a sleek design and durable construction. With its rich brown color and ergonomic design, this sport chair provides a versatile seating solution for various outdoor activities.",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 6,
    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg",
    title: "Table",
    text: "Brown Easy Sport Table",
    price: "$760.00",
    heading: "Brown Easy Sport Chair By Daxone",
    description: "The Brown Easy Sport Chair by Daxone combines comfort and style, featuring a sleek design and durable construction. With its rich brown color and ergonomic design, this sport chair provides a versatile seating solution for various outdoor activities.",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 7,
    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-7.jpg",
    title: "Table",
    text: "Brown Easy Sport Table",
    price: "$870.00",
    heading: "Brown Easy Sport Chair By Daxone",
    description: "The Brown Easy Sport Chair by Daxone combines comfort and style, featuring a sleek design and durable construction. With its rich brown color and ergonomic design, this sport chair provides a versatile seating solution for various outdoor activities.",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 8,
    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-8.jpg",
    title: "Table",
    text: "Brown Easy Sport Table",
    price: "$980.00",
    heading: "Brown Easy Sport Chair By Daxone",
    description: "The Brown Easy Sport Chair by Daxone combines comfort and style, featuring a sleek design and durable construction. With its rich brown color and ergonomic design, this sport chair provides a versatile seating solution for various outdoor activities.",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

const App = () => {

  const [current_data, setCurrent_data] = useState(null);

  const show_details_handle = (data) => {
    setCurrent_data(data);
  };

  const go_back_handle = () => {
    setCurrent_data(null);
  };

  return (
    <>
      {current_data ? (
        <div>
          <ProductDetails
            go_back_handle={go_back_handle}
            image_url={current_data.image_url}
            heading={current_data.heading}
            price={current_data.price}
            description={current_data.description}
          />
        </div>
      ) : (
        <div className="main">
          <Navbar />
          <Slider />
          <Banner />
          <div className="row">
            <div className="Products">
              {product_arr.map((current_object, index) => {
                return (
                  <Cards
                    key={index}
                    click_handle={show_details_handle}
                    image_url={current_object.image}
                    title={current_object.title}
                    text={current_object.text}
                    price={current_object.price}
                    heading={current_object.heading}
                    description={current_object.description}
                  />
                )
              })}
            </div>
          </div>
          <Carosel />
          <div className="row">
            <div className="Products">
              {product_arr.map((current_object, index) => {
                return (
                  <Cards
                    key={index}
                    click_handle={show_details_handle}
                    image_url={current_object.image}
                    title={current_object.title}
                    text={current_object.text}
                    price={current_object.price}
                    heading={current_object.heading}
                    description={current_object.description}
                  />
                );
              })};
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App;