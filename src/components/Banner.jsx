import { Text } from "./Text";

const Banner = () => {
    return (
        <>
            <div className="main">
                <div className="row">
                    <div className="banner">
                        <img src="https://template.hasthemes.com/daxone/daxone/assets/images/bg/banner-bg-1.jpg" alt="" />
                        <h1>Premium Home</h1>
                        <h2>Decorator</h2>
                        <a href="">LEARN MORE</a>
                    </div>
                </div>
            </div>

            <Text heading="Best Sell" />
        </>
    );
};

export { Banner };