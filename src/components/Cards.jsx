const Cards = (props) => {
    let set_data_handle = () => {
        props.click_handle(props)
    };

    return (
        <>
            <div className="nakro">
                <div className="row">
                    <div className="col-md-3">
                        <div className='cards' onClick={set_data_handle}>
                            <img src={props.image_url} alt="Products" />
                            <p className="title">{props.title}</p>
                            <p className="text">{props.text}</p>
                            <p className="price"><strong>{props.price}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Cards };