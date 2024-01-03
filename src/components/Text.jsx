const Text = (props) => {
    return (
        <>
            <div className="banner-text">
                <div className="row">
                    <div>
                        <h3><strong>{props.heading}</strong></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit fuga, eos explicabo.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Text };