import { Logo } from "./Logo";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-3">
                            <Logo />
                        </div>
                        <div className="footer-col col-md-3">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#"><i className="fas fa-angle-right" /> my account</a></li>
                                <li><a href="#"><i className="fas fa-angle-right" /> my order</a></li>
                                <li><a href="#"><i className="fas fa-angle-right" /> my wishlist</a></li>
                                <li><a href="#"><i className="fas fa-angle-right" /> terms of use</a></li>
                                <li><a href="#"><i className="fas fa-angle-right" /> privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col col-md-3">
                            <h4>follow us</h4>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook" /> facebook</a></li>
                                <li><a href="#"><i className="fab fa-twitter" /> twitter</a></li>
                                <li><a href="#"><i className="fab fa-instagram" /> instagram</a></li>
                                <li><a href="#"><i className="fab fa-linkedin" /> linkedin</a></li>
                                <li><a href="#"><i className="fab fa-github" /> github</a></li>
                            </ul>
                        </div>
                        <div className="footer-col col-md-3">
                            <h4>newsletter</h4>
                            <form action>
                                <input type="text" placeholder="Your Name" className="inputName" />
                                <input type="email" placeholder="email@example.com" className="inputEmail" />
                                <input type="submit" defaultValue="Subscribe" name className="inputSubmit" />
                            </form>
                        </div>
                    </div>
                    <div className="row" id="credit">
                        <div className="col">
                            <p>Created By <a href="github.com/rafay637">Syed Rafay</a> ©2024 | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export { Footer };