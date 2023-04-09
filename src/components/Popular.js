function Popular(Component) {
    return function(props) {
        if (props.views > 1000) {
            return(
                <div className="wrap-item wrap-item-popular">
                    <span className="label">Popular!</span>
                    <Component {...props} />
                </div>
            );
        } else {
            return <Component {...props} />
        }
    }
};

export default Popular;