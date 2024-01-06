import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { Banner } from './components/Banner';
import { Cards, Products } from './components/Cards';
import { Carosel } from './components/Carosel';
import { Footer } from './components/Footer';
import ProductDetails from './components/ProductDetails';

const App = () => {

  return (
    <>
    <Navbar />
    <Slider />
    <Banner />
    <Cards />
    <Carosel />
    <Cards />
    <Products />
    <Footer />
    {/* <ProductDetails /> */}
    </>
  )
}

export default App;