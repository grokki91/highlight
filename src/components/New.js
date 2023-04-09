function New(Component) {
    return function(props) {
        if (props.views < 1000) {
            return(
                <div className="wrap-item wrap-item-new">
                    <span className="label">New!</span>
                    <Component {...props} />
                </div>
            );
        } else {
            return <Component {...props} />
        }
    }
};

export default New;